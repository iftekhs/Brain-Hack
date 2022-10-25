import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Main;
