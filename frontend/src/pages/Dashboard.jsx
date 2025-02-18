import React, { useState } from "react";
import { Layout, Menu, Typography } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import UserManagement from "../components/UserManagement";
import CategoryManagement from "../components/CategoryManagement";
import SupplierManagement from "../components/SupplierManagement";
import OrderManagement from "../components/OrderManagement";
import ProductManagement from "../components/ProductManagement";

const { Sider } = Layout;
const { Title } = Typography;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const location = useLocation();

  // Menu items configuration
  const menuItems = [
    {
      key: "users",
      icon: <UserOutlined />,
      label: "User Management",
      onClick: () => {
        setActiveIndex(1);
      },
    },
    {
      key: "suppliers",
      icon: <TeamOutlined />,
      label: "Supplier Management",
      onClick: () => {
        setActiveIndex(2);
      },
    },
    {
      key: "categories",
      icon: <AppstoreOutlined />,
      label: "Category Management",
      onClick: () => {
        setActiveIndex(3);
      },
    },
    {
      key: "products",
      label: "Product Management",
      icon: <ShoppingOutlined />,
      onClick: () => {
        setActiveIndex(4);
      },
    },
    {
      key: "orders",
      icon: <ShoppingCartOutlined />,
      label: "Order Management",
      onClick: () => {
        setActiveIndex(5);
      },
    },
  ];

  // Function to determine the selected menu key based on current path
  const getSelectedKey = () => {
    const path = location.pathname.split("/")[2];
    return path || "users";
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Title level={5} style={{ color: "white", margin: 0 }}>
            {collapsed ? "IMS" : "IMS Dashboard"}
          </Title>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={[getSelectedKey()]}
          mode="inline"
          items={menuItems}
        />
      </Sider>
      <Layout
        style={{ marginLeft: collapsed ? 80 : 200, transition: "all 0.2s" }}
      >
        {activeIndex === 1 && <UserManagement />}
        {activeIndex === 2 && <SupplierManagement />}
        {activeIndex === 3 && <CategoryManagement />}
        {activeIndex === 4 && <ProductManagement />}
        {activeIndex === 5 && <OrderManagement />}
      </Layout>
    </Layout>
  );
};

export default Dashboard;
