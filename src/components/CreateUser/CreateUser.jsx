import { SidenavAndHeader } from "components/common/SidenavAndHeader/SidenavAndHeader";
import "./style.css";

export const CreateUser = () => {
  return (
    <>
      <h1>Create User route</h1>

      <SidenavAndHeader defaultSelectedKeys={"createuser"} badgeCount={1} />
    </>
  );
};
