"use client";

import { useState } from "react";
import { Line } from "@ant-design/plots";
import dayjs from "dayjs";

import ChartContainer from "@/app/(routes)/overview/_components/ChartContainer";
import Loading from "@/app/(routes)/overview/_components/Loading";
import { type GetPolicyTrendsOverTimeType } from "@/app/(routes)/overview/_actions/actions";

interface LineChartProps {
  data: GetPolicyTrendsOverTimeType;
}

const LineChart = ({ data }: LineChartProps) => {
  const [loading, setLoading] = useState(true);

  const config = {
    data,
    xField: (d: GetPolicyTrendsOverTimeType[number]) => new Date(d.date),
    yField: "numberOfPolicies",
    axis: { x: { title: false, size: 40 }, y: { title: false, size: 36 } },
    animate: { enter: { type: "growInX", duration: 1000 } },
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
      title: (d: GetPolicyTrendsOverTimeType[number]) =>
        dayjs(d.date).format("MMM-YYYY"),
      items: [
        {
          field: "numberOfPolicies",
          name: "Number of Policies:",
        },
      ],
    },
    onReady: () => {
      setLoading(false);
    },
  };

  return (
    <ChartContainer
      title="Line Chart: Policy Trends Over Time"
      description="Explore trends in policy introductions over time"
      className="grow basis-full xl:basis-3/5"
    >
      {loading && <Loading />}
      <Line {...config} />
    </ChartContainer>
  );
};

export default LineChart;
