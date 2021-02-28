import React from "react";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { MenuFoldOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./style.css";

export const UserHeader = (props) => {
  return (
    <div className={"userHeader"}>
      <div>
        <MenuFoldOutlined className="menuFoldOutlined" />
      </div>

      <div className={"user"}>
        <UserAvatar badgeCount={props.badgeCount} />
        <h2>Merchandizer One</h2>
      </div>
    </div>
  );
};
