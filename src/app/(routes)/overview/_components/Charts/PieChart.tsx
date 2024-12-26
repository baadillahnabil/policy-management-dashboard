"use client";

import { useState } from "react";
import { Pie, type PlotEvent } from "@ant-design/plots";
import { useRouter } from "next-nprogress-bar";

import ChartContainer from "@/app/(routes)/overview/_components/ChartContainer";
import Loading from "@/app/(routes)/overview/_components/Loading";
import { type GetPolicyByStatusType } from "@/app/(routes)/overview/_actions/actions";
import { PATH, createQueryString } from "@/app/_utils/routes";

interface PieChartProps {
  data: GetPolicyByStatusType;
}

const PieChart = ({ data }: PieChartProps) => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const handleBarClick = (event: PlotEvent) => {
    const barIndex = event.target.__data__.index;
    const { statusId } = data[barIndex];
    router.push(
      `${PATH.DATA}?${createQueryString("status", String(statusId))}`
    );
  };

  const config = {
    data,
    angleField: "numberOfPolicies",
    colorField: "status",
    radius: 0.8,
    style: {
      cursor: "pointer",
    },
    label: {
      text: (d: GetPolicyByStatusType[number]) =>
        `${d.status}\n ${d.numberOfPolicies}`,
    },
    tooltip: {
      title: "status",
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
      title="Pie Chart: Policy Status Breakdown"
      description="Showcase the proportion of policies based on their status"
      className="grow basis-2/6"
    >
      {loading && <Loading />}
      <Pie {...config} />
    </ChartContainer>
  );
};

export default PieChart;
