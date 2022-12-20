import React from 'react';
import Review from './Review/Review';

const Reviews = () => {
  const reviews = [
    {
      _id: 1,
      img: 'https://randomuser.me/api/portraits/men/52.jpg',
      name: 'Nil Sky',
      title: 'Digital Creator',
      review: `Just awesome! The courses here are really great and really helped me learn a lot! 
      They provide beginer courses and advanced course I was a 
      beginner and wanted to learn advanced so I took BrainHack's advance courses on 
      React.js and it took my skills to the next level`,
    },
    {
      _id: 2,
      img: 'https://randomuser.me/api/portraits/men/52.jpg',
      name: 'Nil Sky',
      title: 'Digital Creator',
      review: `The courses here are really awesome. There are lots of programming subjects you can choose starting from HTML, CSS to advanced technologies like GraphQL, Data Structures & Algorithms. The instructors explain every detail very nicely.`,
    },
    {
      _id: 3,
      img: 'https://randomuser.me/api/portraits/men/52.jpg',
      name: 'Nil Sky',
      title: 'Digital Creator',
      review: `Great platform to learn something new or take your skills to the next level! Every course here are amazing the instructor explain you everything in detail and if you still dont understand something they let you talk to the instructor directly and ask him/her your questions!`,
    },
  ];

  return (
    <section className="py-20 px-2">
      <div className="dark:text-white py-5 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Checkout Our Reviews</h2>
        <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
          {reviews.map((review) => (
            <Review key={review._id} reviewData={review}></Review>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
