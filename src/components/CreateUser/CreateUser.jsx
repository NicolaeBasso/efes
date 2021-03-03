import { Layout } from "components/common/Layout/Layout";
import "./style.css";

export const CreateUser = () => {
  return (
    <>
      <h1>Create User route</h1>

      <Layout
        defaultSelectedKeys={"createuser"}
        badgeCount={0}
        contentType={"createuser"}
      />
    </>
  );
};
