import React, { useEffect, useState } from 'react';
import SideNavItem from '../SideNavItem/SideNavItem';
import './LeftSideNav.css';

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_API_ROOT + '/categories/all')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  });

  return (
    <aside className="hidden lg:block left-side-nav px-10">
      <ul className="side-nav-links">
        {categories.map((category) => (
          <SideNavItem key={category._id} category={category}></SideNavItem>
        ))}
      </ul>
    </aside>
  );
};

export default LeftSideNav;
