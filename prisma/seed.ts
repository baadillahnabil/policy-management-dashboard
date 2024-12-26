import { PrismaClient } from "@prisma/client";
import fsPromises from "fs/promises";
import path from "path";

const prisma = new PrismaClient();

async function main() {
  // Read the JSON data file
  const filePath = path.join(__dirname, "policies_data.json");
  const jsonData = await fsPromises.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  // Seed Topics
  const topics = [
    { id: 1, name: "Environment" },
    { id: 2, name: "Economy" },
    { id: 3, name: "Health" },
    { id: 4, name: "Technology" },
    { id: 5, name: "Education" },
  ];

  // Upsert topics into the database
  for (const topic of topics) {
    await prisma.topic.upsert({
      where: { id: topic.id },
      update: {},
      create: topic,
    });
  }

  // Seed Statuses
  const statuses = [
    { id: 1, name: "Introduced" },
    { id: 2, name: "Under consideration" },
    { id: 3, name: "Passed" },
    { id: 4, name: "Failed" },
  ];

  // Upsert statuses into the database
  for (const status of statuses) {
    await prisma.status.upsert({
      where: { id: status.id },
      update: {},
      create: status,
    });
  }

  // Seed policies from the JSON data
  for (const policy of data.policies) {
    await prisma.policy.create({
      data: policy,
    });
  }
}

// Execute the main function and handle errors
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
