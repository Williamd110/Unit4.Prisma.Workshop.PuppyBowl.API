const prisma = require("../prisma");

const seed = async () => {
  await prisma.player.createMany({
    data: [
      { name: "Copper", breed: "English Setter", status: "FIELD", age: 3 },
      { name: "Milo", breed: "Beagle", status: "BENCH", age: 2 },
      { name: "Bella", breed: "Golden Retriever", status: "FIELD", age: 4 },
      { name: "Luna", breed: "Bulldog", status: "BENCH", age: 1 },
      { name: "Max", breed: "German Shepherd", status: "FIELD", age: 5 },
      { name: "Rocky", breed: "Poodle", status: "BENCH", age: 3 },
      { name: "Bailey", breed: "Dachshund", status: "FIELD", age: 2 },
      { name: "Charlie", breed: "Border Collie", status: "BENCH", age: 4 },
      { name: "Daisy", breed: "Shih Tzu", status: "FIELD", age: 3 },
      { name: "Lincoln", breed: "Spaniel", status: "FIELD", age: 2 },
    ],
  });
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });