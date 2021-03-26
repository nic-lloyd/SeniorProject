var { PrismaClient } = require("@prisma/client");
var config = require("./config");
var express = require("express");
var app = express();
var apiRouter = express.Router();

const prisma = new PrismaClient();
app.use(express.json());

apiRouter.get("/sessions", async (req, res) => {
  const allSessions = await prisma.session.findMany();
  console.log(JSON.stringify(allSessions));
  res.json(allSessions);
});

apiRouter.get("/sessions/:id", async (req, res) => {
  const { id } = req.params;
  const session = await prisma.session.findUnique({
    where: {
      sessionId: id,
    },
  });
  console.log(JSON.stringify(session));
  res.json(session);
});

apiRouter.post("/addSession", async (req, res) => {
  const { id } = req.body;
  const result = await prisma.session.create({
    data: {
      sessionId: id,
    },
  });
  res.json(result);
});

app.use("/api", apiRouter);

app.listen(config.port, () => {
  console.log("Server is running on port 8080");
});
