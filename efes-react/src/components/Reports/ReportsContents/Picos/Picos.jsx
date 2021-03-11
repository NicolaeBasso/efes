import {
  DatePicker,
  Space,
  Select,
  Popover,
  Button,
  Checkbox,
  Upload,
  Table,
} from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { data, onTableFiltersChange } from "./PicosData.js";
import "./style.css";

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

export const Picos = () => {
  const { Option } = Select;

  const onChange = (date, dateString) => {
    //console.log(date, dateString);
  };

  const onChangeFilters = () => {};

  const content = (
    <div clasName="filtersContent">
      <Checkbox onChange={onChangeFilters}>Checkbox</Checkbox>
      <Checkbox onChange={onChangeFilters}>Checkbox</Checkbox>
      <Checkbox onChange={onChangeFilters}>Checkbox</Checkbox>
    </div>
  );

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

  const columns = [
    {
      title: "Nume Merchandiser",
      dataIndex: "name",
    },
    {
      title: "Cod Magazin",
      dataIndex: "chinese",
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: "Denumire Magazin",
      dataIndex: "math",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: "Adresa",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: "Retea",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: "Produs Lipsa",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: "Virsta produs",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: "Cantitate",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
  ];

  return (
    <>
      <Space direction="vertical">
        <div className="select">
          <p>Perioada Start</p>
          <DatePicker
            onChange={onChange}
            className="datePicker"
            placeholder="Selecteaza data"
          />
        </div>

        <div className="select">
          <p>Perioada End</p>
          <DatePicker
            onChange={onChange}
            className="datePicker"
            placeholder="Selecteaza data"
          />
        </div>

        <div className="select">
          <p>Merchandiser</p>

          <Select
            showSearch
            className="dropdownPicker"
            placeholder="Selecteaza Merchandiserul"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </div>

        <div className="select">
          <p>Retea</p>

          <Select
            showSearch
            className="dropdownPicker"
            placeholder="Selecteaza Reteaua"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </div>

        <div className="select">
          <p>Magazin</p>

          <Select
            showSearch
            className="dropdownPicker"
            placeholder="Selecteaza Magazinul"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </div>

        <div className="select">
          <p>Denumire Produs</p>

          <Select
            showSearch
            className="dropdownPicker"
            placeholder="Selecteaza Produsul"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </div>
      </Space>

      <div className="filtersUploadWrapper">
        <div className="filters">
          <Popover content={content} trigger="click">
            <Button className="button">Filtrare</Button>
          </Popover>
        </div>

        <div className="upload">
          <Upload {...downloadProps}>
            <Button icon={<DownloadOutlined />} className="button">
              Click to Upload
            </Button>
          </Upload>
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        onChange={onTableFiltersChange}
      />
    </>
  );
};
