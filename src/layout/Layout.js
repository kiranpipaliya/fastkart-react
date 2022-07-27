import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Footer />
      <Outlet />
    </>
  );
};
export default AppLayout;
