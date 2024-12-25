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
