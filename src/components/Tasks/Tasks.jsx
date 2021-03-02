import React from "react";
import { SidenavAndHeader } from "components/common/SidenavAndHeader/SidenavAndHeader";
import { TasksTable } from "./TasksTable/TasksTable";
import "antd/dist/antd.css";
import "./style.css";

export const Tasks = () => {
  return (
    <>
      <h1>Tasks route</h1>

      <SidenavAndHeader defaultSelectedKeys={"tasks"} badgeCount={999} />
      <TasksTable />
    </>
  );
};
