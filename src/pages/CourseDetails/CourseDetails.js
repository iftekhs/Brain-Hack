import React from 'react';
import { FaCrown } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
  const course = useLoaderData();
  const { _id, title, intro_text, description, thumbnail_url, price } = course;
  return (
    <section className="px-2 py-8">
      <div className="container mx-auto">
        <div className="mb-6 flex justify-center md:justify-start">
          <img className="rounded-lg" src={thumbnail_url} alt="" />
        </div>
        <div className="mb-8 flex flex-wrap justify-center md:justify-start items-center gap-4">
          <h2 className="text-center md:text-left text-4xl font-bold">{title}</h2>
          <button className="btn text-sm bg-cpurple text-white hover:bg-violet-600">
            Download PDF
          </button>
        </div>

        <p className="leading-8 text-md mb-5 italic text-gray-600">{intro_text}</p>
        <p className="leading-8 text-md mb-5 text-gray-700">{description}</p>
        <p className="text-xl font-semibold">Price: ${price}</p>
        <Link to={`/checkout/${_id}`}>
          <button className="mt-4 py-3 px-4 rounded transition-all bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center gap-1">
            <FaCrown></FaCrown> <span> Get Premium Access </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CourseDetails;
