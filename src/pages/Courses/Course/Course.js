import React from 'react';
import './Course.css';
import courseImage from '../../../images/hero.jpg';

const Course = ({ course }) => {
  const { _id, title, description, thumbnail_url, price } = course;
  return (
    <div className="course">
      <img className="mb-3" src={thumbnail_url} alt="" />
      <h4 className="text-xl mb-4 font-semibold">{title}</h4>
      <p className="description text-sm text-slate-400 mb-1">
        {description.length > 119 ? description.slice(0, 119) + '...' : description}
      </p>
      <p className="text-sm font-semibold mb-4"> Price: ${price} </p>
      <button className="btn w-full bg-cpurple text-white hover:bg-violet-600">View Course</button>
    </div>
  );
};

export default Course;
