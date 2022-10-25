import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header px-8 py-5">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="logo-container">
            <h4 className="text-4xl font-bold">
              Brain<span className="text-cpurple">H</span>ack
            </h4>
          </div>
        </Link>
        <nav className="flex gap-4">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-1xl header-link active-header-link' : 'text-1xl header-link'
            }
            to="/courses">
            Courses
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-1xl header-link active-header-link' : 'text-1xl header-link'
            }
            to="/faq">
            FAQ
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-1xl header-link active-header-link' : 'text-1xl header-link'
            }
            to="/blog">
            Blog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
