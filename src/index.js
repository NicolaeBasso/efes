import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const { Header, Footer, Sider, Content } = Layout;

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root'),
);