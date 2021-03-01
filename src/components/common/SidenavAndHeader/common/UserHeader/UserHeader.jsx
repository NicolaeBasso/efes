import React from "react";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { MenuFoldOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./style.css";

export class UserHeader extends React.Component {
  constructor(props) {
    super(props);
    this.isSidenavOpen = props.isSidenavOpen;
    this.badgeCount = props.badgeCount;
    this.changeState = props.changeState;
  }

  closeHeader() {}
  openHeader() {}

  render() {
    return (
      <div className={"userHeader"}>
        <button onClick={this.changeState}>
          <MenuFoldOutlined className="menuFoldOutlined" />
        </button>

        <div className={"user"}>
          <UserAvatar badgeCount={this.badgeCount} />
          <h2>Merchandizer One</h2>
        </div>
      </div>
    );
  }
}
