import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const storedMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(storedMode ? storedMode === 'true' : false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  const valueObject = { darkMode, toggleMode };

  return <ThemeContext.Provider value={valueObject}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
