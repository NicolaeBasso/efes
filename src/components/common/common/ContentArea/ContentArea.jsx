import { DashboardContents } from "components/Dashboard/DashboardContents/DashboardContents";
import { TasksContents } from "components/Tasks/TasksContents/TasksContents";
import { ReportsContents } from "components/Reports/ReportsContents/ReportsContents";
import { CreateUserContents } from "components/CreateUser/CreateUserContents/CreateUserContents";
import { SettingsContents } from "components/Settings/SettingsContens/SettingsContents";
import "./style.css";

export const ContentArea = (props) => {
  switch (props.contentType) {
    case "dashboard":
      return (
        <DashboardContents
          isSidenavOpen={props.isSidenavOpen}
          className={"contents"}
        />
      );
    case "tasks":
      return <TasksContents isSidenavOpen={props.isSidenavOpen} />;
    case "reports":
      return <ReportsContents isSidenavOpen={props.isSidenavOpen} />;
    case "createuser":
      return <CreateUserContents isSidenavOpen={props.isSidenavOpen} />;
    case "settings":
      return <SettingsContents isSidenavOpen={props.isSidenavOpen} />;

    default:
      return <TasksContents isSidenavOpen={props.isSidenavOpen} />;
  }
};
