import React from 'react';
import SingleFaq from '../shared/SingleFaq/SingleFaq';

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: 'What do BrainHack courses include?',
      answer:
        'BrainHack courses are maintained and up to dated by our instructors. It includes creating real life proejcts for your porfolios! it contains many kinds of activities and tests. Everything is explained in detail so that you dont miss anything! also everything is simplified to make sure that you really understand well.',
    },
    {
      id: 2,
      question: 'How can I pay for a course?',
      answer: 'We have several payment options including Cards, Wallets etc.',
    },
    {
      id: 3,
      question: 'Can i refund a course?',
      answer:
        'If you dont like a course that you purchased and decide to refund then you surely can refund within 30 days!. If you dont like a course you can make a refund request within the 30 days, provided the request meets the guidelines in our refund policy.',
    },
    {
      id: 4,
      question: 'What if i have a confusion on something?',
      answer:
        'If you are confused about something then you can ask questions directly to the instructor on the course.',
    },
  ];

  return (
    <section className="px-2 py-5">
      <div className="container mx-auto">
        {faqs.map((faq) => (
          <SingleFaq key={faq.id} faq={faq}></SingleFaq>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
