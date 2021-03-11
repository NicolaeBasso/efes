import React from "react";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

<MenuUnfoldOutlined />;
export const UserHeader = (props) => {
  return (
    <div className={props.isSidenavOpen ? "userHeader" : "userHeaderClosed"}>
      <button onClick={props.changeState}>
        {props.isSidenavOpen ? (
          <MenuFoldOutlined className={"menuFoldOutlined"} />
        ) : (
          <MenuUnfoldOutlined className={"menuFoldOutlined"} />
        )}
      </button>

      <div className={"user"}>
        <UserAvatar badgeCount={props.badgeCount} />
        <h2>Merchandizer One</h2>
      </div>
    </div>
  );
};
