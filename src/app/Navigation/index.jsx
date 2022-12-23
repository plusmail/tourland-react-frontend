import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { useAppContext } from '@/context/appContext';
import logoIcon from '@/style/images/logo-icon.png';
import logoText from '@/style/images/logo-text.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import {
  DesktopOutlined,
  SettingOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  CreditCardOutlined,
  BankOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function Navigation() {
  const { state: stateApp, appContextAction } = useAppContext();
  const { isNavMenuClose } = stateApp;
  const { navMenu } = appContextAction;
  const [showLogoApp, setLogoApp] = useState(isNavMenuClose);

  useEffect(() => {
    if (isNavMenuClose) {
      setLogoApp(isNavMenuClose);
    }
    const timer = setTimeout(() => {
      if (!isNavMenuClose) {
        setLogoApp(isNavMenuClose);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isNavMenuClose]);
  const onCollapse = () => {
    navMenu.collapse();
  };

  return (
    <>
      <Sider collapsible collapsed={isNavMenuClose} onCollapse={onCollapse} className="navigation">
        {/*<div className="logo">*/}
        {/*  <img*/}
        {/*    src={logoIcon}*/}
        {/*    alt="Logo"*/}
        {/*    // style={{ margin: "0 auto 40px", display: "block" }}*/}
        {/*  />*/}

        {/*  {!showLogoApp && (*/}
        {/*    <img src={logoText} alt="Logo" style={{ marginTop: '3px', marginLeft: '10px' }} />*/}
        {/*  )}*/}
        {/*</div>*/}
        <div id="logo" className="ls" style={{ marginTop: '3px', marginLeft: '10px' }}>
          <span>패키지 전문 여행사 <FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} /></span>
          <h1><a href="/customer/tourlandMain">투어 랜드</a></h1>
        </div>

        <Menu mode="inline">
          <Menu.Item key={'Dashboard'} icon={<DashboardOutlined />}>
            <Link to={'/'} />
            Dashboard
          </Menu.Item>
          <Menu.Item key={'Department'} icon={<TeamOutlined />}>
            <Link to={'/department'} />
            부서관리
          </Menu.Item>
          <Menu.Item key={'Material-ui'} icon={<TeamOutlined />}>
            <Link to={'/material-ui'} />
            부서관리(M)
          </Menu.Item>
          <Menu.Item key={'Customer'} icon={<CustomerServiceOutlined />}>
            <Link to={'/customer'} />
            고객관리
          </Menu.Item>
          <Menu.Item key={'Invoice'} icon={<FileTextOutlined />}>
            <Link to={'/invoice'} />
            Invoice
          </Menu.Item>
          <Menu.Item key={'Quote'} icon={<FileSyncOutlined />}>
            <Link to={'/quote'} />
            Quote
          </Menu.Item>
          <Menu.Item key={'PaymentInvoice'} icon={<CreditCardOutlined />}>
            <Link to={'/payment/invoice'} />
            Payment Invoice
          </Menu.Item>
          <Menu.Item key={'Employee'} icon={<UserOutlined />}>
            <Link to={'/employee'} />
            Employee
          </Menu.Item>
          <Menu.Item key={'Admin'} icon={<TeamOutlined />}>
            <Link to={'/admin'} />
            Admin
          </Menu.Item>
          <Menu.Item key={'Calendar'} icon={<TeamOutlined />}>
            <Link to={'/calendar'} />
            일정관리
          </Menu.Item>

          <SubMenu key={'Settings'} icon={<SettingOutlined />} title={'Settings'}>
            <Menu.Item key={'PaymentMode'}>
              <Link to={'/payment/mode'} />
              Payment Mode
            </Menu.Item>
            <Menu.Item key={'Role'}>
              <Link to={'/role'} />
              Role
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  );
}
