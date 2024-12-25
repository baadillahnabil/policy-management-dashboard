import { getData } from "@/app/(routes)/data/_actions/actions";

import Container from "@/app/_components/Container";

import Cards from "@/app/(routes)/data/_components/Cards/Cards";
import Header from "@/app/(routes)/data/_components/Header/Header";
import { revalidatePath } from "next/cache";

interface DataPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}
const Data = async ({ searchParams }: DataPageProps) => {
  const data = await getData(searchParams);
  revalidatePath("/data");

  return (
    <Container>
      <Header />
      <Cards data={data} />
    </Container>
  );
};

export default Data;
