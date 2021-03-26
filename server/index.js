var { PrismaClient } = require("@prisma/client");
var config = require("./config");
var express = require("express");
var app = express();
var apiRouter = express.Router();

const prisma = new PrismaClient();
app.use(express.json());

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
apiRouter.get("/sessions/:id", async (req, res) => {
  const { id } = req.params;
  const session = await prisma.session.findUnique({
    where: {
      sessionId: id,
    },
  });

  console.log(new Date(Date.now()).toISOString()); //log timestamp of the API call
  console.log(JSON.stringify(session));
  res.json(session);
});

/**
 * Add a user to a given
 */
apiRouter.get("/users/:sessionId", async (req, res) => {
  const { id } = req.params;
  const result = await prisma.sessionUsers.findMany({
    where: { sessionId: id },
  });
  console.log(result.length + " records found.");
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

app.use("/api", apiRouter);

app.listen(config.port, () => {
  console.log("Server is running on port 8080");
});
