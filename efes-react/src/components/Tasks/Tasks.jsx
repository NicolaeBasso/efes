import React from "react";
import { Layout } from "components/common/Layout/Layout";

export const Tasks = () => {
  return (
    <>
      <Layout
        defaultSelectedKeys={"tasks"}
        badgeCount={999}
        contentType={"tasks"}
      />
    </>
  );
};
