import prisma from "@/app/_utils/prisma";
import Container from "@/app/_components/Container";

import Cards from "@/app/(routes)/data/_components/Cards/Cards";
import Header from "@/app/(routes)/data/_components/Header";

export const getData = async () => {
  return await prisma.policy.findMany({
    include: { location: true, status: true, topic: true },
  });
};

const Data = async () => {
  const data = await getData();

  return (
    <Container>
      <Header />
      <Cards data={data} />
    </Container>
  );
};

export default Data;
