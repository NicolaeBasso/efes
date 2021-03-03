import React from "react";
// common components for Layout component
import { SideNav } from "../common/SideNav/SideNav";
import { UserHeader } from "../common/UserHeader/UserHeader";
import { ContentArea } from "../common/ContentArea/ContentArea";
import "./style.css";

export class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSidenavOpen: true,
      badgeCount: props.badgeCount,
      defaultSelectedKeys: props.defaultSelectedKeys,
      contentType: props.contentType,
    };
  }

  changeState = () => {
    this.setState({
      isSidenavOpen: !this.state.isSidenavOpen,
    });
  };

  render() {
    console.log("In Layout: " + this.state.isSidenavOpen);
    return (
      <>
        <div className="SidenavAndHeader">
          <SideNav
            isSidenavOpen={this.state.isSidenavOpen}
            defaultSelectedKeys={this.state.defaultSelectedKeys}
          />
          <UserHeader
            isSidenavOpen={this.state.isSidenavOpen}
            badgeCount={this.state.badgeCount}
            changeState={this.changeState}
          />
        </div>
        <ContentArea
          className={"contents"}
          isSidenavOpen={this.state.isSidenavOpen}
          contentType={this.state.contentType}
        />
      </>
    );
  }
}
