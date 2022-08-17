import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './footer/Footer';
import FooterButton from './footer/FooterButton';
import Header from './header/Header';
import Header2 from './header/Header2';
import Sidebar from './sidebar/Sidebar';

const AppLayout = () => {
  const location = useLocation();
  const path = location.pathname;
  const pathArray = ['page-list', 'category-wide', 'order-history', 'my-cart', 'my-wishlist', ' about-us', 'pages-list', 'account'];
  const lastPth = path.substring(path.lastIndexOf('/') + 1);
  const lastPathString = lastPth.replaceAll('-', ' ');
  const ifPathIsPresent = pathArray.includes(lastPth);
  const FooterBtn = lastPth === 'my-cart';
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
      {ifPathIsPresent ? <Header2 pageName={lastPathString} /> : <Header sideBar={sideBarShow} onSideBar={sideBarShowHandler} />}
      <Sidebar sideBarShow={sideBarShow} sideBarHide={sideBarHideHandler} />
      {!FooterBtn && <Footer />}
      {FooterBtn && <FooterButton />}
      <Outlet />
    </>
  );
};
export default AppLayout;
