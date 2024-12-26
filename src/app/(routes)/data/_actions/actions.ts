"use server";

import { revalidatePath as revalidatePathNext } from "next/cache";
import prisma from "@/app/_utils/prisma";
import { type PromiseReturnType } from "@prisma/client/extension";

// Function to revalidate a specific path
export const revalidatePath = (path: string) => {
  revalidatePathNext(path);
};

interface GetDataPayload {
  location?: string;
  topic?: string;
  status?: string;
  dateFrom?: string;
  dateTo?: string;
}

// Function to get data based on the provided filters
export const getData = async ({
  location,
  topic,
  status,
  dateFrom,
  dateTo,
}: GetDataPayload) => {
  return await prisma.policy.findMany({
    include: { location: true, status: true, topic: true },
    where: {
      ...(location && { locationId: Number(location) }),
      ...(topic && { topicId: Number(topic) }),
      ...(status && { statusId: Number(status) }),
      ...(dateFrom &&
        dateTo && {
          dateIntroduced: {
            gte: new Date(dateFrom).toISOString(),
            lte: new Date(dateTo).toISOString(),
          },
        }),
    },
  });
};
export type GetDataType = PromiseReturnType<typeof getData>;

// Function to get all locations
export const getLocations = async () => {
  return await prisma.location.findMany();
};
export type GetLocationsType = PromiseReturnType<typeof getLocations>;

// Function to get all topics
export const getTopics = async () => {
  return await prisma.topic.findMany();
};
export type GetTopicsType = PromiseReturnType<typeof getTopics>;

// Function to get all statuses
export const getStatuses = async () => {
  return await prisma.status.findMany();
};
export type GetStatusesType = PromiseReturnType<typeof getStatuses>;
