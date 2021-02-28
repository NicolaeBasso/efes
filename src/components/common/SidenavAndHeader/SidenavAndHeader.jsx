import { SideNav } from "./common/SideNav/SideNav";
import { UserHeader } from "./common/UserHeader/UserHeader";
import "./style.css";

export const SidenavAndHeader = (props) => {
  return (
    <div className="SidenavAndHeader">
      <SideNav defaultSelectedKeys={props.defaultSelectedKeys}></SideNav>
      <UserHeader badgeCount={props.badgeCount} />
    </div>
  );
};
