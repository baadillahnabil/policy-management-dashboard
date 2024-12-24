"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { StyleProvider } from "@ant-design/cssinjs";

import Sidebar from "./Sidebar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AntdRegistry>
      <StyleProvider layer>
        <section className="flex">
          <Sidebar />
          <main className="border border-green-800">{children}</main>
        </section>
      </StyleProvider>
    </AntdRegistry>
  );
}
