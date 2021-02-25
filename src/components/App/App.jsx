import { TasksPage } from '../TasksPage';
import { SideNav } from '../SideNav';
import { HeaderSection } from '../HeaderSection';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;

export const App = () => {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
