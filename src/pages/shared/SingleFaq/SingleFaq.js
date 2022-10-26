import React from 'react';
import './SingleFaq.css';

const SingleFaq = ({ faq }) => {
  const { question, answer } = faq;
  return (
    <div className="faq px-5 py-5 rounded-lg mb-10">
      <h2 className="text-2xl font-semibold mb-2">{question}</h2>
      <p className="text-md text-slate-500">{answer}</p>
    </div>
  );
};

export default SingleFaq;
