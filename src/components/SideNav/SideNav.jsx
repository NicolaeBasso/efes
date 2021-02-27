import React from 'react';
import { Image, Menu } from 'antd';
import { DashboardOutlined, BarChartOutlined, FileDoneOutlined, UserAddOutlined, SettingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { SubMenu } = Menu;

export const SideNav = () => {
  const handleClick = e => {
    console.log('click ', e);
  };

  return (
    <React.Fragment>
      <Image
        width={200}
        height={100}
        src="https://media.publika.md/md/image/201207/full/efeslogo_hq_jpg_18649000.jpg"
      />

    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <SubMenu key="sub1" icon={<DashboardOutlined />} title="Dashboard" />

      <SubMenu key="sub2" icon={<BarChartOutlined />} title="Tasks Table" />

      <SubMenu key="sub3" icon={<FileDoneOutlined />} title="Reports Page" />

      <SubMenu key="sub4" icon={<UserAddOutlined />} title="Create User" />

      <SubMenu key="sub5" icon={<SettingOutlined />} title="Settings" />
      
    </Menu>
    </React.Fragment>
    
  );
}