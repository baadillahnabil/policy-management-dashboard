"use client";

import { theme } from "antd";

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <section
      className="rounded-2xl p-4 shadow-sm"
      style={{ backgroundColor: colorBgContainer }}
    >
      {children}
    </section>
  );
}
