import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './SideNavItem.css';

const SideNavItem = ({ category }) => {
  const { _id, name } = category;
  return (
    <li className="side-nav-link font-semibold text-xl mb-8">
      <NavLink
        className={({ isActive }) => (isActive ? 'active-side-nav-link' : '')}
        to={`/courses/${_id}`}>
        <div className="side-nav-anchor">
          <h4> {name} </h4>
        </div>
        <FaArrowRight className="arrow"></FaArrowRight>
      </NavLink>
    </li>
  );
};

export default SideNavItem;
