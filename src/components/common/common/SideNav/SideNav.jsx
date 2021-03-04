import React from "react";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";
import {
  DashboardOutlined,
  BarChartOutlined,
  FileDoneOutlined,
  UserAddOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

export const SideNav = (props) => {
  const history = useHistory();

  return (
    <div className={props.isSidenavOpen ? "sidenav" : "sidenavClosed"}>
      <div
        className={
          props.isSidenavOpen ? "imageOpenWrapper" : "imageClosedWrapper"
        }
      >
        <img
          height={"50.25px"}
          src="https://media.publika.md/md/image/201207/full/efeslogo_hq_jpg_18649000.jpg"
          alt="EFES"
          className="imageSidenav"
        />
      </div>

      <Menu
        className="menuOpen"
        style={
          props.isSidenavOpen
            ? {
                width: "200px",
                transition: "0.25s ease",
              }
            : {
                width: "0px",
                transition: "0.25s ease",
              }
        }
        defaultSelectedKeys={[props.defaultSelectedKeys]}
        mode="inline"
        width={props.isSidenavOpen ? "200px" : "0px"}
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
