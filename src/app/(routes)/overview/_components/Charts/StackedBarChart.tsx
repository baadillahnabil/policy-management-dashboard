"use client";

import { useMemo, useState } from "react";
import { theme } from "antd";
import { Column } from "@ant-design/plots";
import dayjs from "dayjs";

import ChartContainer from "@/app/(routes)/overview/_components/ChartContainer";
import Loading from "@/app/(routes)/overview/_components/Loading";
import { type GetPolicyTrendsByStatusOverTimeType } from "@/app/(routes)/overview/_actions/actions";
import { type GetStatusesType } from "@/app/_actions/actions";

interface StackedBarChartProps {
  data: GetPolicyTrendsByStatusOverTimeType;
  statuses: GetStatusesType;
}

const StackedBarChart = ({ data, statuses }: StackedBarChartProps) => {
  const [loading, setLoading] = useState(true);

  const {
    token: { blue10, blue9, purple10, orange10 },
  } = theme.useToken();

  const statusesMappedWithColors = useMemo(() => {
    return statuses.map(({ id, name }) => {
      switch (name.toLowerCase()) {
        case "passed":
          return { id, name, color: blue9 };
        case "failed":
          return { id, name, color: purple10 };
        case "introduced":
          return { id, name, color: blue10 };
        default:
          return { id, name, color: orange10 };
      }
    });
  }, [blue10, blue9, orange10, purple10, statuses]);

  const configs = {
    data,
    xField: "date",
    yField: "numberOfPolicies",
    colorField: "status",
    stack: true,
    style: {
      fill: ({ status }: GetPolicyTrendsByStatusOverTimeType[number]) =>
        statusesMappedWithColors.find(({ name }) => name === status)?.color,
    },
    slider: {
      x: {
        labelFormatter: (
          d: GetPolicyTrendsByStatusOverTimeType[number]["date"]
        ) => dayjs(d).format("YYYY/MM/DD"),
      },
      y: { labelFormatter: "~s" },
    },
    tooltip: {
      title: (d: GetPolicyTrendsByStatusOverTimeType[number]) =>
        dayjs(d.date).format("MMM-YYYY"),
    },
    animate: { enter: { type: "growInY", duration: 1000 } },
    legend: {
      color: {
        layout: {
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        },
      },
    },
    onReady: () => {
      setLoading(false);
    },
  };

  return (
    <ChartContainer
      title="Stacked Bar Chart: Policy Introduction by Status Over Time"
      description="Compare the introduction of policies over time segmented by status"
      className="grow basis-full xl:basis-4/6"
    >
      {loading && <Loading />}
      <Column {...configs} />
    </ChartContainer>
  );
};

export default StackedBarChart;
