"use server";

import dayjs from "dayjs";

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

export const getPolicyTrendsOverTime = async () => {
  const data = await prisma.policy.groupBy({
    by: ["dateIntroduced"],
    _count: {
      id: true,
    },
  });

  const groupedByMonth = data.reduce((acc, item) => {
    const month = dayjs(item.dateIntroduced).format("YYYY-MM");
    if (!acc[month]) {
      acc[month] = 0;
    }
    acc[month] += item._count.id;
    return acc;
  }, {} as Record<string, number>);

  const sortedData = Object.entries(groupedByMonth)
    .map(([date, numberOfPolicies]) => ({ date, numberOfPolicies }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return sortedData;
};

export type GetPolicyTrendsOverTimeType = PromiseReturnType<
  typeof getPolicyTrendsOverTime
>;

export type GetPolicyByStatusType = PromiseReturnType<typeof getPolicyByStatus>;
