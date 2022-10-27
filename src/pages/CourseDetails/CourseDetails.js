import React, { useRef } from 'react';
import { FaCloudDownloadAlt, FaCrown } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from 'react-to-pdf';
import Loader from '../Loader/Loader';

const CourseDetails = () => {
  const course = useLoaderData();
  const { _id, title, intro_text, description, thumbnail_url, price } = course;
  const courseRef = useRef(Loader);

  return (
    <section className="px-2 py-8">
      <div className="container-md mx-auto flex justify-end">
        <ReactToPdf targetRef={courseRef} filename="course.pdf">
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="btn text-sm bg-cpurple text-white hover:bg-violet-600">
              <FaCloudDownloadAlt></FaCloudDownloadAlt>
            </button>
          )}
        </ReactToPdf>
      </div>
      <div ref={courseRef} className="dark:text-white container-md mx-auto">
        <div className="mb-6 flex justify-center md:justify-start">
          <img className="rounded-lg" src={thumbnail_url} alt="" />
        </div>
        <div className="mb-8 flex flex-col items-center md:items-start justify-center gap-4">
          <h2 className="text-center md:text-left text-4xl font-bold">{title}</h2>
        </div>
        <p className="leading-8 text-md mb-5 italic text-gray-600">{intro_text}</p>
        <p className="leading-8 text-md mb-5 text-gray-700">{description}</p>
        <p className="text-xl font-semibold">Price: ${price}</p>
      </div>
      <div className="container-md mx-auto">
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
