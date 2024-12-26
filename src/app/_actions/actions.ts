"use server";

import prisma from "@/app/_utils/prisma";
import { type PromiseReturnType } from "@prisma/client/extension";

type GetDataDefaultParams = "ids" | "names" | "both";

export const getStatuses = async (type: GetDataDefaultParams = "both") => {
  const statuses = await prisma.status.findMany({
    select: {
      id: type === "ids" || type === "both",
      name: type === "names" || type === "both",
    },
  });

  return statuses;
};

export type GetStatusesType = PromiseReturnType<typeof getStatuses>;

export const getLocations = async (type: GetDataDefaultParams = "both") => {
  const locations = await prisma.location.findMany({
    select: {
      id: type === "ids" || type === "both",
      name: type === "names" || type === "both",
    },
  });

  return locations;
};

export type GetLocationsType = PromiseReturnType<typeof getLocations>;

export const getTopics = async (type: GetDataDefaultParams = "both") => {
  const topics = await prisma.topic.findMany({
    select: {
      id: type === "ids" || type === "both",
      name: type === "names" || type === "both",
    },
  });

  return topics;
};

export type GetTopicsType = PromiseReturnType<typeof getTopics>;
