import BarChart from "@/app/(routes)/overview/_components/BarChart";
import PieChart from "@/app/(routes)/overview/_components/PieChart";

import {
  getPolicyByTopic,
  getPolicyByStatus,
} from "@/app/(routes)/overview/_actions/actions";

const Overview = async () => {
  const dataPolicyByTopic = await getPolicyByTopic();
  const dataPolicyByStatus = await getPolicyByStatus();

  return (
    <section className="flex items-center justify-center gap-6">
      <BarChart data={dataPolicyByTopic} />
      <PieChart data={dataPolicyByStatus} />
    </section>
  );
};

export default Overview;
