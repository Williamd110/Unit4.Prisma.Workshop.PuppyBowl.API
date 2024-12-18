const express = require("express");
const morgan = require("morgan");
const prisma = require("./prisma");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.get("/api/players", async (req, res) => {
  const players = await prisma.player.findMany();
  res.json(players);
});

app.post("/api/players", async (req, res) => {
  const { name, breed, status, age } = req.body;
  const newPlayer = await prisma.player.create({
    data: { name, breed, status, age },
  });
  res.json(newPlayer);
});

app.get("/api/players/:id", async (req, res) => {
  const player = await prisma.player.findUnique({
    where: { id: parseInt(req.params.id) },
  });
  res.json(player);
});

app.put("/api/players/:id", async (req, res) => {
  const { status } = req.body;
  const updatedPlayer = await prisma.player.update({
    where: { id: parseInt(req.params.id) },
    data: { status },
  });
  res.json(updatedPlayer);
});

app.delete("/api/players/:id", async (req, res) => {
  await prisma.player.delete({
    where: { id: parseInt(req.params.id) },
  });
  res.json({ message: "Player deleted" });
});

// Start
app.listen(3000, () => console.log("Server running on http://localhost:3000"));

