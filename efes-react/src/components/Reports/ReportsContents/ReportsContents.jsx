import { Tabs } from "antd";
import { Picos } from "../ReportsContents/Picos/Picos";

const { TabPane } = Tabs;

export const ReportsContents = (props) => {
  const callback = (key) => {
    console.log(key);
  };

  return (
    <div className="contentsWrapper">
      <div className="contentsInnerWrapper">
        <Tabs onChange={callback} type="card">
          <TabPane tab="Picos" key="1">
            <Picos />
          </TabPane>
          <TabPane tab="Visita" key="2">
            Content of Visita
          </TabPane>
          <TabPane tab="OOS" key="3">
            Content of OOS
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
