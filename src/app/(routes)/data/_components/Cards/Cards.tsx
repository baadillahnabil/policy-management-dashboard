import { Card } from "antd";

import { type PromiseReturnType } from "@prisma/client/extension";
import { getData } from "@/app/(routes)/data/page";

import CardBody from "@/app/(routes)/data/_components/Cards/CardBody";

interface Cards {
  data: PromiseReturnType<typeof getData>;
}

const Cards = ({ data }: Cards) => {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.policyTitle}
          className="cursor-default"
          size="small"
        >
          <CardBody item={item} />
        </Card>
      ))}
    </section>
  );
};

export default Cards;
