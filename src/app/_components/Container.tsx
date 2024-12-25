"use client";

import { theme } from "antd";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> &
  React.PropsWithChildren & {
    children: React.ReactNode;
  };

export default function Container({
  children,
  className,
  ...rest
}: Readonly<ContainerProps>) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <section
      className={`rounded-2xl p-4 shadow-sm ${className}`}
      style={{ backgroundColor: colorBgContainer }}
      {...rest}
    >
      {children}
    </section>
  );
}
