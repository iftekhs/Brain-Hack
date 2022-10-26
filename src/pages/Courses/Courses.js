import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../shared/Course/Course';
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav';
import './Courses.css';

const Courses = () => {
  const { courses, coursesCategory } = useLoaderData();
  return (
    <section>
      <div className="courses-container">
        <LeftSideNav></LeftSideNav>
        <div className="p-8">
          <h2 className="text-4xl">{coursesCategory.name}</h2>
          <div className="courses mt-10 grid  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {courses.map((course) => (
              <Course key={course._id} course={course}></Course>
            ))}
          </div>
          {!courses.length && <h3 className="text-3xl font-semibold">Coming Soon!</h3>}
        </div>
      </div>
    </section>
  );
};

export default Courses;
