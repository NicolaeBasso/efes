import React, { useState } from "react";
import { Table, Input, InputNumber, Popconfirm, Form, Button } from "antd";

export const originData = [
  {
    key: "1",
    name: "John Brown",
    rate: 98,
  },
  {
    key: "2",
    name: "Jim Green",
    rate: 78,
  },
  {
    key: "3",
    name: "Joe Black",
    rate: 55,
  },
  {
    key: "4",
    name: "Jim Red",
    rate: 88,
  },
];

export const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export const EditableVisitRateTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      rate: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "Nume Merchandiser",
      dataIndex: "name",
      editable: false,
    },
    {
      title: "Rata Vizita",
      dataIndex: "rate",
      sorter: {
        compare: (a, b) => a.rate - b.rate,
        multiple: 3,
      },
      editable: true,
    },
    {
      title: "Edit Rate",
      dataIndex: "editRate",
      editable: false,

      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button
              className="EditVisitRateButton"
              type="primary"
              onClick={() => save(record.key)}
            >
              Save
            </Button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Button
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
            type="primary"
          >
            Edit
          </Button>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "rate" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export function onTableFiltersChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}
