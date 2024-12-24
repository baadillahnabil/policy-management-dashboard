"use client";

import { type RefAttributes, type ForwardRefExoticComponent } from "react";
import { useRouter } from "next/navigation";
import { Menu, Layout, theme, type MenuProps } from "antd";
import {
  PieChartOutlined,
  DatabaseOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";

const { Sider } = Layout;

type MenuIconLabel = {
  icon: ForwardRefExoticComponent<
    Omit<AntdIconProps, "ref"> & RefAttributes<HTMLSpanElement>
  >;
  label: string;
};
const MenuIconLabel = ({ icon, label }: MenuIconLabel) => {
  const Icon = icon;

  return {
    icon: <Icon className="text-lg" />,
    label: <span className="font-semibold text-sm">{label}</span>,
  };
};

type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  {
    key: "overview",
    ...MenuIconLabel({ icon: PieChartOutlined, label: "Overview" }),
  },
  {
    key: "data",
    ...MenuIconLabel({ icon: DatabaseOutlined, label: "Data" }),
  },
];

const Sidebar = () => {
  const router = useRouter();
  const {
    token: { colorBgLayout },
  } = theme.useToken();

  const onClick: MenuProps["onClick"] = (e) => {
    router.push(`/${e.key}`);
  };

  return (
    <Sider
      trigger={null}
      collapsible
      breakpoint="md"
      width={210}
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{ backgroundColor: colorBgLayout }}
      className="p-5 mt-5 ml-5"
    >
      <section className="flex justify-center items-center gap-4">
        <AppstoreOutlined className="text-3xl" />
        <span className="text-sm font-bold">Dynamic Policy Dashboard</span>
      </section>
      <hr className="border-t border-gray-300 my-6" />
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["overview"]}
        items={items}
        onClick={onClick}
        className="bg-transparent border-none [&>li]:!p-2 [&>li]:mb-4 [&>li:hover]:bg-none"
      />
    </Sider>
  );
};

export default Sidebar;
