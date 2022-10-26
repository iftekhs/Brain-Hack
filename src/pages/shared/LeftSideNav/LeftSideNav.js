import React, { useEffect, useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import SideNavItem from '../SideNavItem/SideNavItem';
import './LeftSideNav.css';

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const [sideNavOpen, setSideNavOpen] = useState(false);

  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_API_ROOT + '/categories/all')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  });

  return (
    <>
      <aside className={`${sideNavOpen && 'active-side-nav'} left-side-nav px-10`}>
        <ul className="side-nav-links">
          {categories.map((category) => (
            <SideNavItem key={category._id} category={category}></SideNavItem>
          ))}
        </ul>
      </aside>
      <button
        onClick={() => setSideNavOpen(!sideNavOpen)}
        className="sidenav-trigger lg:hidden bg-cpurple text-white p-2 cursor-pointer transition-all hover:bg-violet-600">
        {!sideNavOpen ? (
          <FaAngleDoubleRight></FaAngleDoubleRight>
        ) : (
          <FaAngleDoubleLeft></FaAngleDoubleLeft>
        )}
      </button>
      {sideNavOpen ? <div onClick={() => setSideNavOpen(false)} className="overlay"></div> : ''}
    </>
  );
};

export default LeftSideNav;
