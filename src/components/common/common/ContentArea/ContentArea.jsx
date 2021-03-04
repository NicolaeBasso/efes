import { DashboardContents } from "components/Dashboard/DashboardContents/DashboardContents";
import { TasksContents } from "components/Tasks/TasksContents/TasksContents";
import { ReportsContents } from "components/Reports/ReportsContents/ReportsContents";
import { CreateUserContents } from "components/CreateUser/CreateUserContents/CreateUserContents";
import { SettingsContents } from "components/Settings/SettingsContens/SettingsContents";

export const ContentArea = (props) => {
  let contentToBeDisplayed = (
    <TasksContents isSidenavOpen={props.isSidenavOpen} />
  );

  switch (props.contentType) {
    case "dashboard":
      contentToBeDisplayed = (
        <DashboardContents
          isSidenavOpen={props.isSidenavOpen}
          className="contents"
        />
      );
      break;

    case "tasks":
      contentToBeDisplayed = (
        <TasksContents
          isSidenavOpen={props.isSidenavOpen}
          className="contents"
        />
      );
      break;

    case "reports":
      contentToBeDisplayed = (
        <ReportsContents
          isSidenavOpen={props.isSidenavOpen}
          className="contents"
        />
      );
      break;

    case "createuser":
      contentToBeDisplayed = (
        <CreateUserContents
          isSidenavOpen={props.isSidenavOpen}
          className="contents"
        />
      );
      break;

    case "settings":
      contentToBeDisplayed = (
        <SettingsContents
          isSidenavOpen={props.isSidenavOpen}
          className="contents"
        />
      );
      break;

    default:
      contentToBeDisplayed = (
        <TasksContents
          isSidenavOpen={props.isSidenavOpen}
          className="contents"
        />
      );
  }

  const wrappedContent = (
    <div className={props.className}>{contentToBeDisplayed}</div>
  );

  return wrappedContent;
};
