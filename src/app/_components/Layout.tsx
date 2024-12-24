"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { StyleProvider } from "@ant-design/cssinjs";
import { Layout, ConfigProvider } from "antd";

import Sidebar from "@/app/_components/Sidebar";
import Navbar from "@/app/_components/Navbar";

import { theme } from "@/app/_styles/theme";

const { Content } = Layout;

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AntdRegistry>
      <StyleProvider layer>
        <ConfigProvider theme={theme}>
          <Layout hasSider className="min-h-screen">
            <Sidebar />
            <Layout className="mt-5 pt-5">
              <Navbar />
              <Content className="min-h-screen p-6 mx-4 my-6">
                {children}
              </Content>
            </Layout>
          </Layout>
        </ConfigProvider>
      </StyleProvider>
    </AntdRegistry>
  );
}
