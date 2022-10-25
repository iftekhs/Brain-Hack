import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
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
        <div className="flex gap-4 items-center">
          <nav>
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

          <label
            htmlFor="checked-toggle"
            className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" id="checked-toggle" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>

          <button className="btn bg-cpurple text-white hover:bg-violet-600">Sign In</button>
          <button className="btn bg-cpurple text-white hover:bg-violet-600">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
