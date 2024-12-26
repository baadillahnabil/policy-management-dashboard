"use client";

import { Spin } from "antd";

type ChartContainerProps = React.HTMLAttributes<HTMLDivElement>;

export default function ChartContainer({
  className,
  ...rest
}: Readonly<ChartContainerProps>) {
  return (
    <section
      className={`flex justify-center items-center h-64 ${className}`}
      {...rest}
    >
      <Spin />
    </section>
  );
}
