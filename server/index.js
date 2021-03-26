var { PrismaClient } = require("@prisma/client");
var config = require("./config");
var express = require("express");
var app = express();
var apiRouter = express.Router();

const prisma = new PrismaClient();

apiRouter.get("/sessions", async (req, res) => {
  const allSessions = await prisma.session.findMany();
  console.log(JSON.stringify(allSessions));
  res.json(allSessions);
});

apiRouter.post("/addSession", async (req, res) => {
  const { sessionId } = req.body;
  const result = await prisma.session.create({
    data: {
      sessionId,
    },
  });
  res.json(result);
});

app.use("/api", apiRouter);

app.listen(config.port, () => {
  console.log("Server is running on port 8080");
});
