"use client";

import { useState, useEffect } from "react";
import { Layout, theme } from "antd";
import { usePathname } from "next/navigation";

import Routes from "@/app/_utils/routes";

const { Header } = Layout;

const Navbar = () => {
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
      className="h-10 leading-10 font-bold text-lg"
    >
      {pageTitle}
    </Header>
  );
};

export default Navbar;
