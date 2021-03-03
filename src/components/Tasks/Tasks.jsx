import React from "react";
import { Layout } from "components/common/Layout/Layout";
import "./style.css";

export const Tasks = () => {
  return (
    <>
      <h1>Tasks route</h1>

      <Layout
        defaultSelectedKeys={"tasks"}
        badgeCount={999}
        contentType={"tasks"}
      />
    </>
  );
};
