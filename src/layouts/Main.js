import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import Header from '../pages/shared/Header/Header';

const Main = () => {
  const storedMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(storedMode ? storedMode === 'true' : false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header darkMode={darkMode} toggleMode={toggleMode}></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Main;
