import BarChart from "@/app/(routes)/overview/_components/BarChart";
import PieChart from "@/app/(routes)/overview/_components/PieChart";
import LineChart from "@/app/(routes)/overview/_components/LineChart";

import {
  getPolicyByTopic,
  getPolicyByStatus,
  getPolicyTrendsOverTime,
} from "@/app/(routes)/overview/_actions/actions";

const Overview = async () => {
  const dataPolicyByTopic = await getPolicyByTopic();
  const dataPolicyByStatus = await getPolicyByStatus();
  const dataPolicyTrendsOverTime = await getPolicyTrendsOverTime();

  return (
    <section className="flex flex-col gap-6">
      <section className="flex items-center justify-center gap-6">
        <BarChart data={dataPolicyByTopic} />
        <LineChart data={dataPolicyTrendsOverTime} />
      </section>
      <section className="flex items-center justify-center gap-6">
        <PieChart data={dataPolicyByStatus} />
      </section>
    </section>
  );
};

export default Overview;
