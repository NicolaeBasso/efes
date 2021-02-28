import { SidenavAndHeader } from "components/common/SidenavAndHeader/SidenavAndHeader";
import "./style.css";

export const Reports = () => {
  return (
    <>
      <h1>Reports route</h1>
      <SidenavAndHeader defaultSelectedKeys={"reports"} badgeCount={3} />
    </>
  );
};
