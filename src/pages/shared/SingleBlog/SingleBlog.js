import React from 'react';
import './SingleBlog.css';

const SingleBlog = ({ blog }) => {
  const { question, answer } = blog;

  return (
    <div className="blog dark:bg-slate-800 dark:text-white px-5 py-5 rounded-lg mb-10">
      <h2 className="text-2xl font-semibold mb-2">{question}</h2>
      <p className="text-md text-slate-500">{answer}</p>
    </div>
  );
};

export default SingleBlog;
