import { Layout } from "components/common/Layout/Layout";
import "./style.css";

export const Dashboard = () => {
  return (
    <>
      <h1>Dashboard route</h1>

      <Layout
        defaultSelectedKeys={"dashboard"}
        badgeCount={2}
        contentType={"dashboard"}
      />
    </>
  );
};
