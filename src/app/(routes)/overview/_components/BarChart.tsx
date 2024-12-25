"use client";

import { Column, type PlotEvent } from "@ant-design/plots";
import { theme } from "antd";
import { useRouter } from "next-nprogress-bar";

import Container from "@/app/_components/Container";
import { type GetPolicyByTopicType } from "@/app/(routes)/overview/_actions/actions";
import { PATH, createQueryString } from "@/app/_utils/routes";

interface BarChartProps {
  data: GetPolicyByTopicType;
}

const BarChart = ({ data }: BarChartProps) => {
  const router = useRouter();
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
    axis: {
      x: {
        title: "Topics",
      },
      y: {
        title: "Number of Policies",
      },
    },
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
          name: "Number of Policies",
        },
      ],
    },
    legend: false,
    onReady: ({ chart }: any) => {
      chart.on("element:click", handleBarClick);
    },
  };

  return (
    <>
      <Container className="grow basis-2/5">
        <Column {...configs} />
      </Container>
      <Container className="grow basis-3/5">
        <h1>Pie Chart</h1>
      </Container>
    </>
  );
};

export default BarChart;
