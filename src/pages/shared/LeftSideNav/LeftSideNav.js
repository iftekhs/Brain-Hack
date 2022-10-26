import React, { useEffect, useState } from 'react';
import './LeftSideNav.css';
import SideNavItem from './SideNavItem/SideNavItem';

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_API_ROOT + '/categories/all')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  });

  return (
    <aside className="left-side-nav px-10">
      <ul className="side-nav-links">
        {categories.map((category) => (
          <SideNavItem key={category._id} category={category}></SideNavItem>
        ))}
      </ul>
    </aside>
  );
};

export default LeftSideNav;
