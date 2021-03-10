import React, { useState, useEffect } from "react";
import { Button, Upload, Table, Input } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { columns, data, onTableFiltersChange } from "./SettingsContentsData.js";
import "./style.css";

export const SettingsContents = (props) => {
  const [tableData, setTableData] = useState(data);

  const changeGlobalVisitRate = () => {
    const rate = document.getElementById("GlobalVisitRateInput").value;
    let tempData = [...tableData];

    if (rate) {
      tempData.forEach((dataItem) => {
        dataItem.rate = rate;
      });
      setTableData([...tempData]);
    } else return;
  };

  const downloadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        //message.success(`${info.file.name} file uploaded successfully`);
        console.log(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        //message.error(`${info.file.name} file upload failed.`);
        console.log(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="contentsWrapper">
      <div className="contentsInnerWrapper">
        <div className="settingsUploadBlock">
          <div className="settingsUpload">
            <h3>First Upload</h3>
            <Upload {...downloadProps}>
              <Button icon={<DownloadOutlined />} className="button">
                Click to Upload
              </Button>
            </Upload>
          </div>
          <div className="settingsUpload">
            <h3>Second Upload</h3>
            <Upload {...downloadProps}>
              <Button icon={<DownloadOutlined />} className="button">
                Click to Upload
              </Button>
            </Upload>
          </div>
          <div className="settingsUpload">
            <h3>Third Upload</h3>
            <Upload {...downloadProps}>
              <Button icon={<DownloadOutlined />} className="button">
                Click to Upload
              </Button>
            </Upload>
          </div>
        </div>

        <h2 className="settingsH2">Global Visit Rate</h2>
        <div className="changeGlobalVisitRate">
          <Input
            className="globalVIsitRateInput"
            placeholder="Set Global Visit Rate"
            id="GlobalVisitRateInput"
          />
          <Button
            onClick={changeGlobalVisitRate}
            className="globalVisitRateButton"
            type="primary"
            htmlType="submit"
          >
            Change Rate
          </Button>
        </div>

        <h2 className="settingsH2">Merchandizer Visit Rate</h2>
        <Table
          columns={columns}
          dataSource={tableData}
          onChange={onTableFiltersChange}
        />
      </div>
    </div>
  );
};
