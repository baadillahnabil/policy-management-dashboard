import BarChart from "@/app/(routes)/overview/_components/Charts/BarChart";
import PieChart from "@/app/(routes)/overview/_components/Charts/PieChart";
import LineChart from "@/app/(routes)/overview/_components/Charts/LineChart";
import StackBarChart from "@/app/(routes)/overview/_components/Charts/StackedBarChart";
import HeatMapChart from "@/app/(routes)/overview/_components/Charts/HeatMapChart";

import {
  getPolicyByTopic,
  getPolicyByStatus,
  getPolicyTrendsOverTime,
  getPolicyTrendsByStatusOverTime,
  getPolicyByLocationAndTime,
} from "@/app/(routes)/overview/_actions/actions";
import { getStatuses } from "@/app/_actions/actions";

const Overview = async () => {
  const statuses = await getStatuses();

  const dataPolicyByTopic = await getPolicyByTopic();
  const dataPolicyByStatus = await getPolicyByStatus();
  const dataPolicyTrendsOverTime = await getPolicyTrendsOverTime();
  const dataPolicyTrendsByStatusOverTime =
    await getPolicyTrendsByStatusOverTime();
  const dataPolicyByLocationAndTime = await getPolicyByLocationAndTime();

  return (
    <section className="flex flex-col gap-6">
      <section className="flex items-center justify-center gap-6">
        <BarChart data={dataPolicyByTopic} />
        <LineChart data={dataPolicyTrendsOverTime} />
      </section>
      <section className="flex items-center justify-center gap-6">
        <StackBarChart
          data={dataPolicyTrendsByStatusOverTime}
          statuses={statuses}
        />
        <PieChart data={dataPolicyByStatus} />
      </section>
      <section className="flex items-center justify-center gap-6">
        <HeatMapChart data={dataPolicyByLocationAndTime} />
      </section>
    </section>
  );
};

export default Overview;
