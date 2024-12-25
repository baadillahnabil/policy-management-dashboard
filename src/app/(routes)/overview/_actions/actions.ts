"use server";

import prisma from "@/app/_utils/prisma";
import { type PromiseReturnType } from "@prisma/client/extension";

export const getPolicyByTopic = async () => {
  const data = await prisma.policy.groupBy({
    by: ["topicId"],
    _count: {
      id: true,
    },
  });

  const topics = await prisma.topic.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  const topicMap = new Map(topics.map((topic) => [topic.id, topic.name]));

  return data.map((item) => ({
    topicId: item.topicId,
    topic: topicMap.get(item.topicId) ?? "Unknown",
    numberOfPolicies: item._count.id,
  }));
};

export type GetPolicyByTopicType = PromiseReturnType<typeof getPolicyByTopic>;

export const getPolicyByStatus = async () => {
  const data = await prisma.policy.groupBy({
    by: ["statusId"],
    _count: {
      id: true,
    },
  });

  const statuses = await prisma.status.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  const statusMap = new Map(statuses.map((status) => [status.id, status.name]));

  return data.map((item) => ({
    statusId: item.statusId,
    status: statusMap.get(item.statusId) ?? "Unknown",
    numberOfPolicies: item._count.id,
  }));
};

export type GetPolicyByStatusType = PromiseReturnType<typeof getPolicyByStatus>;
