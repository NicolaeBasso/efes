import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Dashboard } from "components/Dashboard/Dashboard";
import { Reports } from "components/Reports/Reports";
import { CreateUser } from "components/CreateUser/CreateUser";
import { Settings } from "components/Settings/Settings";
import { Tasks } from "components/Tasks/Tasks";
import "antd/dist/antd.css";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Tasks} />
          <Route exact path="/tasks" component={Tasks} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/reports" component={Reports} />
          <Route path="/createuser" component={CreateUser} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
