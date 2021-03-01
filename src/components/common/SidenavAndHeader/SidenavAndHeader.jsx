import { SideNav } from "./common/SideNav/SideNav";
import { UserHeader } from "./common/UserHeader/UserHeader";
import "./style.css";

export const SidenavAndHeader = (props) => {
  const changeSideNavState = () => {
    console.log("aaa");
    console.log(document.getElementsByClassName("sidenav").props);
    //if(document.getElementsByClassName("sidenav").)
  };

  return (
    <div className="SidenavAndHeader">
      <SideNav
        defaultSelectedKeys={props.defaultSelectedKeys}
        changeSideNavState={changeSideNavState}
      ></SideNav>
      <UserHeader
        badgeCount={props.badgeCount}
        changeSideNavState={changeSideNavState}
      />
    </div>
  );
};
