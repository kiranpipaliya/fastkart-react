import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTE_DATA } from './routeList';
import AppLayout from '../layout/Layout';

const RouterLayout = () => {
  return (
    <>
      <Routes>
        {ROUTE_DATA.map((item, i) => (
          <Route element={<AppLayout />} key={i}>
            <Route path={item.path} element={item.comment} />
          </Route>
        ))}
      </Routes>
    </>
  );
};
export default RouterLayout;
