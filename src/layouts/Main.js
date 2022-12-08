import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeProvider';
import Footer from '../pages/shared/Footer/Footer';
import Header from '../pages/shared/Header/Header';

const Main = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode && 'dark'}>
      <Header darkMode={darkMode}></Header>
      <main className="dark:bg-cdark">
        <Outlet darkMode={darkMode}></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Main;
