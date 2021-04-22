var { PrismaClient } = require("@prisma/client");
var config = require("./config");
var express = require("express");
var app = express();
var apiRouter = express.Router();
var axios = require("axios");

const prisma = new PrismaClient();
app.use(express.json());

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
apiRouter.get(
  "/sessions/:sessionId/:restaurantId/numVotes",
  async (req, res) => {
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
 * User casts vote for a restaurant
 */
apiRouter.get("/test", async (req, res) => {
  const result = await prisma.userRestaurant.findMany();
  res.json(result);
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
  const restaurantId = req.body.restaurantId;
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
  const result = await yelpREST("/businesses/search", {
    params: {
      location: location,
      categories: "restaurants",
      open_now: open_now,
      radius: radius,
      price: price,
    },
  })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
  res.json(result);
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
  res.json(result);
});

app.use("/api", apiRouter);

app.listen(config.port, () => {
  console.log("Server is running on port 8080");
});
