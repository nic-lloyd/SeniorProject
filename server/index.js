var { PrismaClient } = require("@prisma/client");
var config = require("./config");
var express = require("express");
var app = express();
var apiRouter = express.Router();
var axios = require("axios");

const prisma = new PrismaClient();
console.log("testtttttttt")
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8100"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
  next();
});

/**
 * create axios instance for connection with the
 * Yelp API
 * (Yealp API Documentation: https://www.yelp.com/developers/documentation/v3/business_search)
 */
const API_KEY = process.env.YELP_API_KEY;
let yelpREST = axios.create({
  baseURL: "https://api.yelp.com/v3/",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-type": "application/json",
  },
});

/**
 * GET request for all sessions in the session table
 */
apiRouter.get("/sessions", async (req, res) => {
  const allSessions = await prisma.session.findMany(); //get all rows from the session table

  console.log(new Date(Date.now()).toISOString()); //log timestamp of the API call
  console.log(JSON.stringify(allSessions)); //log result
  res.json(allSessions); //return result as a JSON
});

/**
 * GET request for a single session in the session table
 */
apiRouter.get("/sessions/:sessionId", async (req, res) => {
  const { sessionId } = req.params;
  const session = await prisma.session.findUnique({
    where: {
      sessionId: sessionId,
    },
  });

  console.log(new Date(Date.now()).toISOString()); //log timestamp of the API call
  console.log(JSON.stringify(session));
  res.json(session);
});

/**
 * GET users from a given session
 */
apiRouter.get("/sessions/:sessionId/users", async (req, res) => {
  const { id } = req.params;
  const result = await prisma.sessionUsers.findMany({
    where: { sessionId: id },
    // select: { userId: true },
  });
  console.log(result.length + " records found.");
  res.json(result);
});

/**
 * GET number of votes a user has cast
 * ########FIX THIS#########
 */
apiRouter.get("/sessions/:sessionId/:userId/numVotes", async (req, res) => {
  const { sessionId, userId } = req.params;
  const result = await prisma.userRestaurant.findMany({
    where: {
      userId: parseInt(userId),
      sessionId: sessionId,
    },
  });
  console.log(result);
  res.json(result.length);
});

/**
 * GET number of positive votes on a restaurant
 */
apiRouter.get("/sessions/:sessionId/:restaurantId/numVotes", async (req, res) => {
    const { sessionId, restaurantId } = req.params;
    const result = await prisma.userRestaurant.findMany({
      where: {
        sessionId: sessionId,
        restaurantId: restaurantId,
        vote: {
          gt: 0,
        },
      },
    });
    res.json(result);
  }
);

/**
 * Get the restaurants in a session
 */
apiRouter.get("/:sessionId/restaurants", async (req, res) => {
  let result;

  try {
    result = await prisma.sessionRestaurant.findMany({
      where: {
        sessionId: req.params.sessionId,
      },
    });
  } catch (e) {
    console.log(e);
  }

  res.json(result);
});

/**
 * User casts vote for a restaurant
 */
apiRouter.get("/test", async (req, res) => {
  const result = await prisma.userRestaurant.findMany();
  res.json(result);
});

apiRouter.get("/:sessionId/matches", async (req, res) => {
  const sessionId = req.params.sessionId;
  let finalResult = [];
  const sessionData = await prisma.sessionRestaurant.findMany({
    where: {
      sessionId: sessionId,
    },
  });

  for (let data of sessionData) {
    let result;
    if (data.votes > 0) {
      try {
        result = await yelpREST(`/businesses/${data.restaurantId}`, {
          params: {
            locale: "en_US",
          },
        });
      } catch (e) {
        console.log("error");
        console.log(e);
      }
      finalResult.push({
        sessionId: sessionId,
        restaurantId: data.restaurantId,
        votes: data.votes,
        name: result.data.name,
        image_url: result.data.image_url,
        url: result.data.url,
      });
    }
  }
  console.log(finalResult);

  res.json(finalResult);
});

/**
 * POST request to add a session to the session table with the
 * current timestamp
 */
apiRouter.post("/addSession", async (req, res) => {
  const id = req.query.sessionId;
  const result = await prisma.session.create({
    data: {
      sessionId: id,
      dateCreated: new Date(Date.now()).toISOString(),
    },
  });
  console.log(new Date(Date.now()).toISOString()); //log timestamp of the API call
  res.json(result);
});

/**
 * Add user to the database. req.body should contain a user id
 * and a screen name
 */
apiRouter.post("/addUser", async (req, res) => {
  const { userId, name } = req.body;
  const newUser = await prisma.user.create({
    data: {
      userId: userId,
      name: name,
    },
  });
  console.log("New user created");
  res.json(newUser);
});

/**
 * Add restaurant to a session.
 * TODO: Add check to make sure session exists
 */
apiRouter.post("/:sessionId/addRestaurant", async (req, res) => {
  const { sessionId } = req.params;
  const restaurantId = req.body.data.restaurantId;
  console.log(req.body);
  const result = await prisma.sessionRestaurant.create({
    data: {
      sessionId: sessionId,
      restaurantId: restaurantId,
      votes: 0,
    },
  });
  console.log(`New restaurant (${restaurantId}) added to session ${sessionId}`);
  res.json(result);
});

/**
 * Cast a vote from a user
 * (Not ready to implement yet)
 * This is so stupid right now don't even look at it
 */
apiRouter.post("/:sessionId/vote", async (req, res) => {
  const { sessionId } = req.params;
  const { userId, restaurantId, vote } = req.query;
  const result = await prisma.userRestaurant.create({
    data: {
      sessionId: sessionId,
      userId: userId,
      restauratntId: restaurantId,
      vote: vote,
    },
  });
  console.log(`[${sessionId}]: User [${userId}] voted on [${restaurantId}]`);
  res.json(result);
});

/**
 * Increment the number of votes that a restaurant has in a given session
 * This works now LETS GOOOO
 */
apiRouter.put("/:sessionid/:restaurantid/incrementVote", async (req, res) => {
  const { sessionid, restaurantid } = req.params;
  const result = await prisma.sessionRestaurant.update({
    where: {
      sessionId_restaurantId: {
        sessionId: sessionid,
        restaurantId: restaurantid,
      },
    },
    data: {
      votes: {
        increment: 1,
      },
    },
  });
  console.log(
    `Updated votes of [${restaurantid}] in [${sessionid}]: ${result.votes}`
  );
  res.json(result);
});

/**
 * PUT request to update a single user's display name
 */
apiRouter.put("/updateName/:id", async (req, res) => {
  const userId = req.params.id;
  const user = await prisma.user.update({
    where: { userId: userId },
    data: { name: req.body.name },
  });
  res.json(user);
});

/**
 * ##### YELP PROXY REQUESTS #####
 */

/**
 * Proxy GET request for initial query to the Yelp API
 */
apiRouter.get("/yelp", async (req, res) => {
  const { location, radius, price, open_now } = req.query;

  let result;
  try {
    result = await yelpREST("/businesses/search", {
      params: {
        location: location,
        categories: "restaurants",
        open_now: open_now,
        radius: radius,
        price: price,
        limit: 10,
      },
    });
  } catch (e) {
    console.log(e);
  }

  res.json(result.data);
});

/**
 * Proxy GET request to grab specific businesses from the Yelp API
 */
apiRouter.get("/yelp/:businessId", async (req, res) => {
  const { businessId } = req.params;
  const result = await yelpREST(`/businesses/${businessId}`, {
    params: {
      locale: "en_US",
    },
  })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("/yelp/:businessId");
  res.json(result);
});

app.use("/api", apiRouter);

app.listen(config.port, () => {
  console.log("Server is running on port 8080");
});
