"use client";

import Container from "@/app/_components/Container";

type ChartContainerProps = React.HTMLAttributes<HTMLDivElement> &
  React.PropsWithChildren & {
    title?: string;
    description?: string;
  };

export default function ChartContainer({
  children,
  className,
  title,
  description,
  ...rest
}: Readonly<ChartContainerProps>) {
  return (
    <Container className={className} {...rest}>
      <section className="px-2 md:px-8 pt-2 pb-6">
        <h2 className="font-bold">{title}</h2>
        <p className="text-xs text-gray-500">{description}</p>
      </section>
      {children}
    </Container>
  );
}
