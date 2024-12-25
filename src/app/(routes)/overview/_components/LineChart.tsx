"use client";

import { Line } from "@ant-design/plots";
import dayjs from "dayjs";

import Container from "@/app/_components/Container";
import { type GetPolicyTrendsOverTimeType } from "@/app/(routes)/overview/_actions/actions";

interface LineChartProps {
  data: GetPolicyTrendsOverTimeType;
}

const LineChart = ({ data }: LineChartProps) => {
  const config = {
    data,
    xField: (d: GetPolicyTrendsOverTimeType[number]) => new Date(d.date),
    yField: "numberOfPolicies",
    axis: { x: { title: false, size: 40 }, y: { title: false, size: 36 } },
    slider: {
      x: {
        labelFormatter: (d: GetPolicyTrendsOverTimeType[number]["date"]) =>
          dayjs(d).format("YYYY/MM/DD"),
      },
      y: { labelFormatter: "~s" },
    },
    style: {
      lineWidth: 2,
    },
    tooltip: {
      title: "date",
      items: [
        {
          field: "numberOfPolicies",
          name: "Number of Policies:",
        },
      ],
    },
  };

  return (
    <Container className="grow basis-3/5">
      <Line {...config} />
    </Container>
  );
};

export default LineChart;
