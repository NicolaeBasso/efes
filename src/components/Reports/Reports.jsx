import { Layout } from "components/common/Layout/Layout";
import "./style.css";

export const Reports = () => {
  return (
    <>
      <h1>Reports route</h1>
      <Layout
        defaultSelectedKeys={"reports"}
        badgeCount={11}
        contentType={"reports"}
      />
    </>
  );
};
