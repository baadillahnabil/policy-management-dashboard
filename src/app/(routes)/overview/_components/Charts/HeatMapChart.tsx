"use client";

import { useState } from "react";
import { theme } from "antd";
import { Heatmap } from "@ant-design/plots";
import dayjs from "dayjs";

import ChartContainer from "@/app/(routes)/overview/_components/ChartContainer";
import Loading from "@/app/(routes)/overview/_components/Loading";
import { type GetPolicyByLocationAndTimeType } from "@/app/(routes)/overview/_actions/actions";

interface HeatMapChartProps {
  data: GetPolicyByLocationAndTimeType;
}

const HeatMapChart = ({ data }: HeatMapChartProps) => {
  const [loading, setLoading] = useState(true);

  const {
    token: { volcano3, volcano5, volcano7, volcano9, volcano10 },
  } = theme.useToken();

  const config = {
    data,
    xField: "date",
    yField: "location",
    colorField: "numberOfPolicies",
    sizeField: "numberOfPolicies",
    shapeField: "square",
    label: {
      text: (d: GetPolicyByLocationAndTimeType[number]) => d.numberOfPolicies,
      position: "inside",
      style: {
        fill: "#fff",
        pointerEvents: "none",
      },
    },
    scale: {
      size: { range: [12, 20] },
      color: { range: [volcano3, volcano5, volcano7, volcano9, volcano10] },
    },
    slider: {
      x: {
        labelFormatter: (d: GetPolicyByLocationAndTimeType[number]["date"]) =>
          dayjs(d).format("YYYY/MM/DD"),
      },
    },
    tooltip: {
      title: (d: GetPolicyByLocationAndTimeType[number]) =>
        `${d.location} - ${dayjs(d.date).format("DD-MMM-YYYY")}`,
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
      title="Heatmap: Policy Introduction by Location and Time"
      description="Visualize the concentration of policy introductions across different locations and time periods"
      className="grow basis-5/5"
    >
      {loading && <Loading />}
      <Heatmap {...config} />
    </ChartContainer>
  );
};

export default HeatMapChart;
