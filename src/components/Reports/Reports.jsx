import { Layout } from "components/common/Layout/Layout";

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
