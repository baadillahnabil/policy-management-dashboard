import {
  getLocations,
  getStatuses,
  getTopics,
} from "@/app/(routes)/data/_actions/actions";

import Filters from "@/app/(routes)/data/_components/Header/Filters";

const Header = async () => {
  const locations = await getLocations();
  const topics = await getTopics();
  const statuses = await getStatuses();

  return (
    <section className="flex justify-between items-center px-4 md:px-6 pt-2 md:pt-4 pb-6 md:pb-8 gap-12">
      <h1 className="text-xl md:text-2xl font-semibold">Policies</h1>
      <Filters locations={locations} topics={topics} statuses={statuses} />
    </section>
  );
};

export default Header;
