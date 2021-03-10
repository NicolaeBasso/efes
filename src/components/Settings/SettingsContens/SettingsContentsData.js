import { Button } from "antd";

const setDataItemVisitRate = () => {
  console.log("works");
};

export const columns = [
  {
    title: "Nume Merchandiser",
    dataIndex: "name",
  },
  {
    title: "Rata Vizita",
    dataIndex: "rate",
    sorter: {
      compare: (a, b) => a.rate - b.rate,
      multiple: 3,
    },
  },
  {
    title: "Edit Rate",
    dataIndex: "editRate",
    sorter: {
      compare: (a, b) => a.editRate - b.editRate,
      multiple: 2,
    },
  },
];

export const data = [
  {
    key: "1",
    name: "John Brown",
    rate: 98,
    editRate: (
      <Button type="primary" htmlType="submit">
        Edit
      </Button>
    ),
  },
  {
    key: "2",
    name: "Jim Green",
    rate: 78,
    editRate: (
      <Button type="primary" htmlType="submit">
        Edit
      </Button>
    ),
  },
  {
    key: "3",
    name: "Joe Black",
    rate: 55,
    editRate: (
      <Button type="primary" htmlType="submit">
        Edit
      </Button>
    ),
  },
  {
    key: "4",
    name: "Jim Red",
    rate: 88,
    editRate: (
      <Button type="primary" htmlType="submit" onClick={setDataItemVisitRate}>
        Edit
      </Button>
    ),
  },
];

export function onTableFiltersChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}
