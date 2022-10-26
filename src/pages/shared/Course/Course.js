import React from 'react';
import './Course.css';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
  const { _id, title, intro_text, thumbnail_url, price } = course;
  return (
    <div className="course">
      <img className="mb-3" src={thumbnail_url} alt="" />
      <h4 className="text-xl mb-4 font-semibold">{title}</h4>
      <p className="description text-sm text-slate-400 mb-1">
        {intro_text.length > 119 ? intro_text.slice(0, 119) + '...' : intro_text}
      </p>
      <p className="text-sm font-semibold mb-4"> Price: ${price} </p>
      <Link
        to={`/course/${_id}`}
        className="btn w-full bg-cpurple text-center text-white hover:bg-violet-600">
        View Course
      </Link>
    </div>
  );
};

export default Course;
