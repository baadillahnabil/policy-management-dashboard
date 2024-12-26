"use server";

import prisma from "@/app/_utils/prisma";
import { type PromiseReturnType } from "@prisma/client/extension";

export const getStatuses = async (type: "ids" | "names" | "both" = "both") => {
  const statuses = await prisma.status.findMany({
    select: {
      id: type === "ids" || type === "both",
      name: type === "names" || type === "both",
    },
  });

  return statuses;
};

export type GetStatusesType = PromiseReturnType<typeof getStatuses>;
