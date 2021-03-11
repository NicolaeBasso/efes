import { Layout } from "components/common/Layout/Layout";

export const Dashboard = () => {
  return (
    <>
      <Layout
        defaultSelectedKeys={"dashboard"}
        badgeCount={2}
        contentType={"dashboard"}
      />
    </>
  );
};
