import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({ reviewData }) => {
  const { img, name, title, review } = reviewData;
  return (
    <div className="dark:bg-slate-800 flex flex-col gap-2 bg-cgray max-w-lg p-5 rounded">
      <div className="flex items-center gap-2">
        <img className="w-10 h-10 rounded-full" src={img} alt={name + ' - Person'} />
        <div className="">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-slate-400">{title}</p>
        </div>
      </div>

      <p className="leading-8">{review}</p>
      <div className="flex gap-3 text-cpurple">
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
      </div>
    </div>
  );
};

export default Review;
