"use client";

import { useState, type HTMLAttributes } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { StyleProvider } from "@ant-design/cssinjs";
import { Layout, Drawer, ConfigProvider } from "antd";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

import Sidebar from "@/app/_components/Sidebar";
import Navbar from "@/app/_components/Navbar";

import { theme } from "@/app/_styles/theme";
import useMobile from "@/app/_hooks/useMobile";

const { Content } = Layout;

type MainLayoutProps = HTMLAttributes<HTMLDivElement> & React.PropsWithChildren;

export default function MainLayout({ children }: MainLayoutProps) {
  const { isMobile } = useMobile();

  const [collapsed, setCollapsed] = useState(true);

  return (
    <AntdRegistry>
      <StyleProvider layer>
        <ConfigProvider theme={theme}>
          <Layout hasSider className="min-h-screen overflow-auto relative">
            {isMobile ? (
              <Drawer
                open={!collapsed}
                placement="left"
                onClose={() => setCollapsed(true)}
                width={210}
                className="[&>.ant-drawer-body]:p-0 [&>.ant-drawer-header]:hidden"
              >
                <Sidebar setCollapsed={setCollapsed} />
              </Drawer>
            ) : (
              <Sidebar setCollapsed={setCollapsed} />
            )}
            <Layout className="mt-3 pt-3 md:mt-5 md:pt-5 md:ml-[210px]">
              <Navbar
                isMobile={isMobile}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
              />
              <Content className="p-3 md:p-6 md:mx-4 md:my-6">
                {children}
              </Content>
            </Layout>
          </Layout>
          <ProgressBar height="3px" color="#1890FF" />
        </ConfigProvider>
      </StyleProvider>
    </AntdRegistry>
  );
}
