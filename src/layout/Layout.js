import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

const AppLayout = () => {
  const [sideBarShow, setSidebarShow] = useState(false);

  const sideBarShowHandler = (showSidebar) => {
    setSidebarShow(!showSidebar);
    document.body.classList.add('bluer');
  };
  const sideBarHideHandler = (hideSidebar) => {
    setSidebarShow(!hideSidebar);
    document.body.classList.remove('bluer');
  };

  return (
    <>
      <Header sideBar={sideBarShow} onSideBar={sideBarShowHandler} />
      <Sidebar sideBarShow={sideBarShow} sideBarHide={sideBarHideHandler} />
      <Footer />
      <Outlet />
    </>
  );
};
export default AppLayout;
