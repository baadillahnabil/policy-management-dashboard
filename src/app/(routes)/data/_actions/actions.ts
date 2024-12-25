"use server";

import { revalidatePath as revalidatePathNext } from "next/cache";

import prisma from "@/app/_utils/prisma";
import { type PromiseReturnType } from "@prisma/client/extension";

export const revalidatePath = (path: string) => {
  revalidatePathNext(path);
};

interface GetDataPayload {
  location?: string;
  topic?: string;
  status?: string;
  date?: [string, string];
}
export const getData = async ({ location, topic, status }: GetDataPayload) => {
  return await prisma.policy.findMany({
    include: { location: true, status: true, topic: true },
    where: {
      ...(location && { locationId: Number(location) }),
      ...(topic && { topicId: Number(topic) }),
      ...(status && { statusId: Number(status) }),
    },
  });
};
export type GetDataType = PromiseReturnType<typeof getData>;

export const getLocations = async () => {
  return await prisma.location.findMany();
};
export type GetLocationsType = PromiseReturnType<typeof getLocations>;

export const getTopics = async () => {
  return await prisma.topic.findMany();
};
export type GetTopicsType = PromiseReturnType<typeof getTopics>;

export const getStatuses = async () => {
  return await prisma.status.findMany();
};
export type GetStatusesType = PromiseReturnType<typeof getStatuses>;
