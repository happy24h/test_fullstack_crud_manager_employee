import React from "react";
import {
  UserOutlined,
  PlusCircleOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Layout, theme } from "antd";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Layout.scss";
const { Content } = Layout;

const items = [
  {
    key: "1",
    icon: React.createElement(UserOutlined),
    label: `Manager Employee`,
  },
  {
    key: "2",
    icon: <PlusCircleOutlined />,
    label: `Add Employee`,
  },
  {
    key: "3",
    icon: <EditOutlined />,
    label: `Edit Employee`,
  },
];

console.log("check item", items);
// eslint-disable-next-line react/prop-types
const LayoutDefault = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  console.log("check style", colorBgContainer, borderRadiusLG);
  //   console.log("check color bg container", colorBgContainer);
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header />
        <Content className="content">
          <div className="content-section">{children}</div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};
export default LayoutDefault;
