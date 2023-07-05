import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {  RiMailFill } from 'react-icons/ri';
import { FaDesktop,FaHome, FaUser } from 'react-icons/fa'
import './NavbarTop.css'
import Banner from '../Banner/Banner'
import About from '../About/About'
import Projects from '../Project/Project'

const { Header } = Layout;

const NavbarTop = () => {
  const [selectedKey, setSelectedKey] = useState('1');

  const handleMenuClick = (key) => {
    setSelectedKey(key);
  };

  const [showMagnifier, setShowMagnifier] = useState(false);

  const handleMouseEnter = () => {
    setShowMagnifier(true);
    // Additional logic for displaying zoomed-in content or other actions
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
    // Additional logic for hiding zoomed-in content or other actions
  };



  return (
    <Layout>
      <Header
        className='header'
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
        <div className="header__personal-info">

          <p className='profile-name'><RiMailFill style={{ marginRight: '0.5rem' }} />

            vyshnavprasanth2k@gmail.com</p>
        </div>
        <Menu
          className='menu'
          theme="light"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          onClick={({ key }) => handleMenuClick(key)}
          style={{
            justifySelf: 'flex-end',
            backgroundColor: 'white',
            color: 'black'
          }}
        >
          <Menu.Item key='1'>< FaHome style={{ marginRight: '0.5rem' }} />Home</Menu.Item>
          <Menu.Item key='2'>< FaUser style={{ marginRight: '0.5rem' }} />About</Menu.Item>
          <Menu.Item key='3'>< FaDesktop style={{ marginRight: '0.5rem' }} />Projects</Menu.Item>
        </Menu>
      </Header>

      <div style={{ padding: '20px', backgroundColor: 'white' }}>
        {selectedKey === '1' && <Banner />}
        {selectedKey === '2' && <About />}
        {selectedKey === '3' && <Projects />}
      </div>
    </Layout>
  );
};

export default NavbarTop;
