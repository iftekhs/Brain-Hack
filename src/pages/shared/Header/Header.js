import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header px-8 py-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="logo-container">
          <h4 className="text-4xl font-bold">
            Brain<span className="text-violet-500">H</span>ack
          </h4>
        </div>
        <nav className="flex gap-4">
          <Link className="text-1xl font-semibold" to="/">
            Courses
          </Link>
          <Link className="text-1xl font-semibold" to="/">
            FAQ
          </Link>
          <Link className="text-1xl font-semibold" to="/">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
