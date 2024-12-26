"use client";

import { useState } from "react";
import { Column, type PlotEvent } from "@ant-design/plots";
import { theme } from "antd";
import { useRouter } from "next-nprogress-bar";

import ChartContainer from "@/app/(routes)/overview/_components/ChartContainer";
import Loading from "@/app/(routes)/overview/_components/Loading";
import { type GetPolicyByTopicType } from "@/app/(routes)/overview/_actions/actions";
import { PATH, createQueryString } from "@/app/_utils/routes";

interface BarChartProps {
  data: GetPolicyByTopicType;
}

const BarChart = ({ data }: BarChartProps) => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const {
    token: { green5, gold5, blue5, purple5, volcano5 },
  } = theme.useToken();

  const handleBarClick = (event: PlotEvent) => {
    const barIndex = event.target.__data__.index;
    const { topicId } = data[barIndex];
    router.push(`${PATH.DATA}?${createQueryString("topic", String(topicId))}`);
  };

  const configs = {
    data,
    xField: "topic",
    yField: "numberOfPolicies",
    style: {
      radiusTopLeft: 10,
      radiusTopRight: 10,
      inset: 5,
      cursor: "pointer",
      fill: ({ topic }: GetPolicyByTopicType[number]) => {
        switch (topic) {
          case "Health":
            return green5;
          case "Economy":
            return gold5;
          case "Education":
            return blue5;
          case "Environment":
            return purple5;
          default:
            return volcano5;
        }
      },
    },
    animate: { enter: { type: "growInY", duration: 1000 } },
    label: {
      text: (originData: GetPolicyByTopicType[number]) => {
        return `${originData.numberOfPolicies} Policies`;
      },
      textBaseline: "bottom",
    },
    tooltip: {
      title: "topic",
      items: [
        {
          field: "numberOfPolicies",
          name: "Number of Policies:",
        },
      ],
    },
    legend: false,
    onReady: ({ chart }: PlotEvent) => {
      setLoading(false);
      chart.on("element:click", handleBarClick);
    },
  };

  return (
    <ChartContainer
      title="Bar Chart: Policy Distribution by Topic"
      description="Visualize the distribution of policies across various topics"
      className="grow basis-full xl:basis-2/5"
    >
      {loading && <Loading />}
      <Column {...configs} />
    </ChartContainer>
  );
};

export default BarChart;
