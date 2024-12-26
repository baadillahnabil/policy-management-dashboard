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

  for (const topic of topics) {
    await prisma.topic.upsert({
      where: { id: topic.id },
      update: {},
      create: topic,
    });
  }

  // Seed Locations
  const locations = [
    { id: 1, name: "New York" },
    { id: 2, name: "California" },
    { id: 3, name: "Texas" },
    { id: 4, name: "Florida" },
    { id: 5, name: "Illinois" },
  ];

  for (const location of locations) {
    await prisma.location.upsert({
      where: { id: location.id },
      update: {},
      create: location,
    });
  }

  // Seed Statuses
  const statuses = [
    { id: 1, name: "Introduced" },
    { id: 2, name: "Under consideration" },
    { id: 3, name: "Passed" },
    { id: 4, name: "Failed" },
  ];

  for (const status of statuses) {
    await prisma.status.upsert({
      where: { id: status.id },
      update: {},
      create: status,
    });
  }

  // Seed Policies
  for (const policy of data) {
    await prisma.policy.create({
      data: {
        policyTitle: policy.policyTitle,
        shortDescription: policy.shortDescription,
        dateIntroduced: new Date(policy.dateIntroduced),
        topic: { connect: { id: policy.topic.id } },
        location: { connect: { id: policy.location.id } },
        status: { connect: { id: policy.status.id } },
      },
    });
  }
}

main()
  .then(async () => {
    console.log("Seeding complete!");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
