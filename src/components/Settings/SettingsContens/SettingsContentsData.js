import { Button } from "antd";

const setDataItemVisitRate = () => {
  console.log("works");
};

export const data = [
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

export function onTableFiltersChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}
