import React from "react";
import { Image, Menu } from "antd";
import { useHistory } from "react-router-dom";
import {
  DashboardOutlined,
  BarChartOutlined,
  FileDoneOutlined,
  UserAddOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "./SideNav.css";

export const SideNav = (props) => {
  const history = useHistory();

  const handleClick = (e) => {
    console.log("click ", e);
  };

  return (
    <div className={"sidenav"}>
      <Image
        width={"144.25px"}
        height={"50.25px"}
        src="https://media.publika.md/md/image/201207/full/efeslogo_hq_jpg_18649000.jpg"
        preview={false}
      />

      <Menu
        style={{ width: 200 }}
        defaultSelectedKeys={[props.defaultSelectedKeys]}
        mode="inline"
      >
        <Menu.Item
          key="dashboard"
          icon={<DashboardOutlined />}
          title="Dashboard"
          onClick={() => {
            history.push("dashboard");
          }}
        >
          Dashboard
        </Menu.Item>

        <Menu.Item
          key="tasks"
          icon={<BarChartOutlined />}
          title="Tasks Table"
          onClick={() => {
            history.push("tasks");
          }}
        >
          {" "}
          Tasks
        </Menu.Item>

        <Menu.Item
          key="reports"
          icon={<FileDoneOutlined />}
          title="Reports Page"
          onClick={() => {
            history.push("reports");
          }}
        >
          {" "}
          Reports
        </Menu.Item>

        <Menu.Item
          key="createuser"
          icon={<UserAddOutlined />}
          title="Create User"
          onClick={() => {
            history.push("createuser");
          }}
        >
          {" "}
          Create User
        </Menu.Item>

        <Menu.Item
          key="settings"
          icon={<SettingOutlined />}
          title="Settings"
          onClick={() => {
            history.push("settings");
          }}
        >
          Settings
        </Menu.Item>
      </Menu>
    </div>
  );
};
