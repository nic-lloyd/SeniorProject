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

app.use("/api", apiRouter);

app.listen(config.port, () => {
  console.log("Server is running on port 8080");
});
