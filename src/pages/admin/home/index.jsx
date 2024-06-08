import React, { useState } from 'react';
import './style.css';
import daidien from '../../../assets/user/image/logo/logodaidien-removebg-preview.png'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  ProfileOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Layout, Menu, theme } from 'antd';
import Loading from '../../../component/loading';
import { useLogoutActions } from "../../../action/authAction";
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const navigate = useNavigate();
  const { logoutSubmit, loading } = useLogoutActions();

  const handleMenuClick = (e) => {
    if (e.key === 'logout') {
      logoutSubmit();
    } else {
      navigate(e.key);
    }
  };

  return (
    <Layout className=''>
      <Loading loading={loading} />
      
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" style={{height: 'auto'}}>
          <img src={daidien} alt="" className='mw-100' />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={handleMenuClick}
          items={[
            {
              key: '/admin/user',
              icon: <UserOutlined />,
              label: 'User',
            },
            {
              key: '/admin/profile',
              icon: <ProfileOutlined />,
              label: 'Profile',
            },
            {
              key: '/admin/category',
              icon: <MenuFoldOutlined />,
              label: 'Danh mục',
            },
           
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className='site_layout_background'
          style={{
            padding: '0',
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className='avatar_admin'>
            <Avatar size="default" icon={<UserOutlined />} />
            <span className='name'>{localStorage.getItem('auth_name')}</span>
            <Button onClick={logoutSubmit} type="primary" shape="circle" icon={<LogoutOutlined />} size={{size: 'large'}} />
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin;
