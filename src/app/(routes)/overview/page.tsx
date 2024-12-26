import BarChart from "@/app/(routes)/overview/_components/Charts/BarChart";
import PieChart from "@/app/(routes)/overview/_components/Charts/PieChart";
import LineChart from "@/app/(routes)/overview/_components/Charts/LineChart";
import StackBarChart from "@/app/(routes)/overview/_components/Charts/StackedBarChart";

import {
  getPolicyByTopic,
  getPolicyByStatus,
  getPolicyTrendsOverTime,
  getPolicyTrendsByStatusOverTime,
} from "@/app/(routes)/overview/_actions/actions";
import { getStatuses } from "@/app/_actions/actions";

const Overview = async () => {
  const dataPolicyByTopic = await getPolicyByTopic();
  const dataPolicyByStatus = await getPolicyByStatus();
  const dataPolicyTrendsOverTime = await getPolicyTrendsOverTime();
  const dataPolicyTrendsByStatusOverTime =
    await getPolicyTrendsByStatusOverTime();
  const statuses = await getStatuses();

  // console.log(
  //   "dataPolicyTrendsByStatusOverTime",
  //   dataPolicyTrendsByStatusOverTime
  // );

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
    </section>
  );
};

export default Overview;
