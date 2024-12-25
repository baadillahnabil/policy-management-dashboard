import { Card, Empty } from "antd";

import { type GetDataType } from "@/app/(routes)/data/_actions/actions";

import CardBody from "@/app/(routes)/data/_components/Cards/CardBody";

interface Cards {
  data: GetDataType;
}

const Cards = ({ data }: Cards) => {
  if (data.length <= 0) {
    return (
      <section className="flex items-center justify-center my-10 border border-gray-200 rounded-lg py-10">
        <Empty />
      </section>
    );
  }

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
