import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';

const AppLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default AppLayout;
