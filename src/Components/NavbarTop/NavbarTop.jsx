import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { RiMailFill } from 'react-icons/ri';
import { FaDesktop, FaHome, FaUser } from 'react-icons/fa'
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
          <Menu.Item key='1' className='menu-links' style={{fontSize:'0.9em' }}>< FaHome style={{ marginRight: '0.5rem',fontSize:'0.9em'}} />Home</Menu.Item>
          <Menu.Item key='2'className='menu-links'style={{fontSize:'0.9em' }}>< FaUser style={{ marginRight: '0.5rem',fontSize:'0.9em '}} />About</Menu.Item>
          <Menu.Item key='3'className='menu-links'>< FaDesktop style={{ marginRight: '0.5rem' }} />Projects</Menu.Item>
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
