import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';
import './Header.css';
import { AuthContext } from '../../../contexts/AuthProvider';
import Avatar from '../../../images/avatar.svg';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  const signOut = () => {
    logOut();
  };

  return (
    <header className="header px-5 py-5">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="logo-container">
            <h4 className="text-4xl font-bold">
              Brain<span className="text-cpurple">H</span>ack
            </h4>
          </div>
        </Link>
        <nav className="hidden md:flex gap-4 items-center">
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-1xl header-link active-header-link' : 'text-1xl header-link'
              }
              to="/courses/00">
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
          </div>

          <label
            htmlFor="checked-toggle"
            className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" id="checked-toggle" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>

          {user && user.uid ? (
            <>
              <img
                title={user.displayName}
                className="w-10 h-10 rounded-full"
                src={user.photoURL ? user.photoURL : Avatar}
                alt="user"
                height="60"
              />
              <button onClick={signOut} className="btn bg-cpurple text-white hover:bg-violet-600">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn bg-cpurple text-white hover:bg-violet-600">
                Sign In
              </Link>
              <Link to="/register" className="btn bg-cpurple text-white hover:bg-violet-600">
                Sign Up
              </Link>
            </>
          )}
        </nav>
        <button
          onClick={toggleBurgerMenu}
          className={`btn ${burgerMenuOpen && 'bg-cgray'} block md:hidden btn-burger text-3xl`}>
          <GoThreeBars></GoThreeBars>
        </button>
      </div>
      <div className={`container ${!burgerMenuOpen && 'hidden'} mx-auto py-3  mt-2`}>
        <ul>
          <li className="mb-4">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-1xl header-link active-header-link' : 'text-1xl header-link'
              }
              to="/courses/00">
              Courses
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-1xl header-link active-header-link' : 'text-1xl header-link'
              }
              to="/faq">
              FAQ
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-1xl header-link active-header-link' : 'text-1xl header-link'
              }
              to="/blog">
              Blog
            </NavLink>
          </li>
          <li className="mb-4">
            <label
              htmlFor="checked-toggle-menu"
              className="ml-2 inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" id="checked-toggle-menu" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </li>
          <li className="mb-7 ml-2">
            <Link to="/login" className="btn bg-cpurple text-white hover:bg-violet-600">
              Sign In
            </Link>
          </li>
          <li className="ml-2">
            <Link to="/register" className="btn bg-cpurple text-white hover:bg-violet-600">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
