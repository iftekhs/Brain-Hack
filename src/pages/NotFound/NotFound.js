import React from 'react';
import './NotFound.css';
import NotFoundImage from '../../images/404.svg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="not-found-section px-2">
      <div className="not-found-contianer flex items-center justify-center">
        <div className="not-found-content flex flex-col items-center">
          <img className="mb-10" src={NotFoundImage} alt="" />
          <h2 className="mb-5 text-4xl font-semibold text-white">Oop's Look's like your lost!</h2>
          <button onClick={() => navigate(-1)} className="btn bg-white hover:bg-slate-50">
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
