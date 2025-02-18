import { Content, Header } from "antd/es/layout/layout";
import React from "react";

const SupplierManagement = () => {
  return (
    <>
      {" "}
      <Header>
        <h3 style={{ color: "white" }}>Supplier Management</h3>
      </Header>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
        }}
      ></Content>
    </>
  );
};

export default SupplierManagement;
