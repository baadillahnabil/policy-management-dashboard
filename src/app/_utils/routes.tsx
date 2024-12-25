import { PieChartOutlined, DatabaseOutlined } from "@ant-design/icons";

export const PATH = {
  OVERVIEW: "/overview",
  DATA: "/data",
};

export const createQueryString = (name: string, value: string) => {
  const params = new URLSearchParams();
  params.set(name, value);

  return params.toString();
};

const Routes = [
  {
    key: PATH.OVERVIEW.slice(1),
    label: "Overview",
    icon: PieChartOutlined,
  },
  {
    key: PATH.DATA.slice(1),
    label: "Data",
    icon: DatabaseOutlined,
  },
];

export default Routes;
