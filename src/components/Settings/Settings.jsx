import { Layout } from "components/common/Layout/Layout";
import "./style.css";

export const Settings = () => {
  return (
    <>
      <h1>Settings route</h1>

      <Layout
        defaultSelectedKeys={"settings"}
        badgeCount={0}
        contentType={"settings"}
      />
    </>
  );
};
