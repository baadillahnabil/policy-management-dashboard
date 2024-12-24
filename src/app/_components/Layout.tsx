"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { StyleProvider } from "@ant-design/cssinjs";
import { Layout, ConfigProvider } from "antd";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const { Content } = Layout;

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AntdRegistry>
      <StyleProvider layer>
        <ConfigProvider
          theme={{
            token: {
              colorBgLayout: "#F8F8F8",
              colorPrimary: "#1890FF",
            },
          }}
        >
          <Layout hasSider className="min-h-screen">
            <Sidebar />
            <Layout className="mt-5 pt-5">
              <Navbar />
              <Content
                className="min-h-screen p-6 mx-4 my-6"
                // style={{
                //   margin: "24px 16px",
                //   padding: 24,
                //   minHeight: "100vh",
                //   background: colorBgContainer,
                //   borderRadius: borderRadiusLG,
                // }}
              >
                {children}
              </Content>
            </Layout>
          </Layout>
        </ConfigProvider>
      </StyleProvider>
    </AntdRegistry>
  );
}
