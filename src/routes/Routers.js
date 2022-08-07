import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouterLayout from './RouterLayout';
import React from 'react';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/*'} exact element={<RouterLayout />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
