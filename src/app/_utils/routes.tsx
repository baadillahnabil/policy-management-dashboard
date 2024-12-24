import { PieChartOutlined, DatabaseOutlined } from "@ant-design/icons";

export const PATH = {
  OVERVIEW: "/overview",
  DATA: "/data",
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
