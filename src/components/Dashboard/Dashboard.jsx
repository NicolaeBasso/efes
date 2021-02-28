import { SidenavAndHeader } from "components/common/SidenavAndHeader/SidenavAndHeader";
import "./style.css";

export const Dashboard = () => {
  return (
    <>
      <h1>Dashboard route</h1>

      <SidenavAndHeader defaultSelectedKeys={"dashboard"} badgeCount={2} />
    </>
  );
};
