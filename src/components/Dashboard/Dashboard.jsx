import { SideNav } from "components/SideNav/SideNav";

export const Dashboard = () => {
  return (
    <>
      <h1>Dashboard route</h1>
      <SideNav defaultSelectedKeys={"dashboard"}></SideNav>
    </>
  );
};
