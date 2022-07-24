import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/home';
import LayoutRoutes from './LayoutRoutes';

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/*`} element={<LayoutRoutes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
