import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
  const course = useLoaderData();
  return (
    <section className="px-2 py-5">
      <div className="container mx-auto">
        <h2>This is the checkout page!</h2>
      </div>
    </section>
  );
};

export default Checkout;
