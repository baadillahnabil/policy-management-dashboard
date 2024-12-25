"use client";

import { Pie, type PlotEvent } from "@ant-design/plots";
import { useRouter } from "next-nprogress-bar";

import Container from "@/app/_components/Container";
import { type GetPolicyByStatusType } from "@/app/(routes)/overview/_actions/actions";
import { PATH, createQueryString } from "@/app/_utils/routes";

interface PieChartProps {
  data: GetPolicyByStatusType;
}

const PieChart = ({ data }: PieChartProps) => {
  const router = useRouter();

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
      position: "spider",
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
    onReady: ({ chart }: any) => {
      chart.on("element:click", handleBarClick);
    },
  };

  return (
    <Container className="grow basis-3/5">
      <Pie {...config} />
    </Container>
  );
};

export default PieChart;
