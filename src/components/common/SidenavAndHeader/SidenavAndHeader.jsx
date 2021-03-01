import React from "react";
import { SideNav } from "./common/SideNav/SideNav";
import { UserHeader } from "./common/UserHeader/UserHeader";
import "./style.css";

export class SidenavAndHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSidenavOpen: false,
      defaultSelectedKeys: props.defaultSelectedKeys,
      changeSideNavState: props.changeSideNavState,
    };
  }

  changeState = () => {
    console.log(this.state.isSidenavOpen);
    this.setState({
      isSidenavOpen: !this.state.isSidenavOpen,
    });
  };

  render() {
    return (
      <div className="SidenavAndHeader">
        <SideNav
          isSidenavOpen={this.state.isSidenavOpen}
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          changeSideNavState={this.state.changeSideNavState}
        />
        <UserHeader
          isSidenavOpen={this.state.isSidenavOpen}
          badgeCount={this.state.badgeCount}
          changeSideNavState={this.state.changeSideNavState}
          changeState={this.changeState}
        />
      </div>
    );
  }
}
