import React from 'react';
import { Layout, Menu, theme } from 'antd';
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';
const { Header, Footer } = Layout;

const Navbar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const location = useLocation();

  const getCurrentKey = () => {
    const { pathname } = location;

    switch (pathname) {
      case '/':
        return '1';
      case '/about':
        return '2';
      case '/projects':
        return '3';
      case '/contact':
        return '4';
      default:
        return '1'; // Set a default key if the pathname doesn't match any case
    }
  };

  return (
    <Layout >
      <Header className='header'
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'white',
          justifyContent: 'space-between',
          color: 'rgb(120, 176, 199)'
        }}
      >
        <div className="header__personal-info" >
          <h4 className='profile-name'>VYSHNAV PRASANTH</h4>
        </div>
        <Menu className='menu'
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={[getCurrentKey()]}
          style={{
            width: '35vw',
            justifySelf: 'flex-end',
            backgroundColor: 'white',
            color: 'rgb(120, 176, 199)',
            fontSize:'1.1 em'
          }}
        >
          <Menu.Item key='1' >
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key='3'>
            <Link to="/projects">Projects</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;