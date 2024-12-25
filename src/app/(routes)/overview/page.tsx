import BarChart from "@/app/(routes)/overview/_components/BarChart";

import { getPolicyByTopic } from "@/app/(routes)/overview/_actions/actions";

const Overview = async () => {
  const dataPolicyByTopic = await getPolicyByTopic();

  return (
    <section className="flex items-center justify-center gap-6">
      <BarChart data={dataPolicyByTopic} />
    </section>
  );
};

export default Overview;
