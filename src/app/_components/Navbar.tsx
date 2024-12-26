"use client";

import { useState, useEffect } from "react";
import { Layout, Button, theme } from "antd";
import { usePathname } from "next/navigation";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import Routes from "@/app/_utils/routes";

const { Header } = Layout;

interface NavbarProps {
  collapsed: boolean;
  isMobile: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Navbar = ({ collapsed, isMobile, setCollapsed }: NavbarProps) => {
  const {
    token: { colorBgLayout },
  } = theme.useToken();

  const path = usePathname();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const route = Routes.find((item) => `/${item?.key}` === path);
    if (route) setPageTitle(route.label);
  }, [path]);

  return (
    <Header
      style={{ background: colorBgLayout }}
      className="h-10 flex items-center gap-2 px-4 md:px-12"
    >
      {isMobile && (
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className="p-3 rounded"
        />
      )}
      <h1 className="leading-10 font-bold text-lg">{pageTitle}</h1>
    </Header>
  );
};

export default Navbar;
