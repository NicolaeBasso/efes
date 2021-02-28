import { SidenavAndHeader } from "components/common/SidenavAndHeader/SidenavAndHeader";
import "./style.css";

export const Settings = () => {
  return (
    <>
      <h1>Settings route</h1>
      <SidenavAndHeader defaultSelectedKeys={"settings"} badgeCount={0} />
    </>
  );
};
