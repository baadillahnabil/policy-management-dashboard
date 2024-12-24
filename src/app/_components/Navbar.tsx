"use client";

import { Layout, theme } from "antd";

const { Header } = Layout;

const Navbar = () => {
  const {
    token: { colorBgLayout },
  } = theme.useToken();

  return (
    <Header
      style={{ background: colorBgLayout }}
      className="h-10 leading-10 font-bold text-lg"
    >
      The page
    </Header>
  );
};

export default Navbar;
