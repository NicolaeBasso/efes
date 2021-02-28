import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import { Dashboard } from "components/Dashboard/Dashboard";
import { Reports } from "components/Reports/Reports";
import { CreateUser } from "components/CreateUser/CreateUser";
import { Settings } from "components/Settings/Settings";
import { Tasks } from "components/Tasks/Tasks";
import { SideNav } from "components/common/SidenavAndHeader/common/SideNav/SideNav";
import "antd/dist/antd.css";

const { Header, Footer, Sider, Content } = Layout;

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

          <Route path="/sidenav" component={SideNav} />
        </Switch>
      </BrowserRouter>

      {/*<Layout>
        <Header>
          <HeaderSection/>
        </Header>
        <Layout>
          <Sider>
            <SideNav/>
          </Sider>
          <Content>
            <TasksPage/>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>*/}
    </>
  );
};

export default App;
