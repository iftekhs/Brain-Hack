import React from 'react';
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav';
import './Courses.css';

const Courses = () => {
  return (
    <section>
      <div className="courses-container">
        <LeftSideNav></LeftSideNav>
        <div className="p-8">
          <h2 className="text-4xl">All Courses</h2>
          <div className="courses mt-10 grid grid-cols-4 gap-8">
            <div className="course"></div>
            <div className="course"></div>
            <div className="course"></div>
            <div className="course"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
