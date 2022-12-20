import React from 'react';
import './Trusted.css';

const Trusted = () => {
  return (
    <section className="py-8 px-2">
      <div className="dark:bg-slate-800 dark:text-white bg-cgray py-8 flex flex-col items-center justify-center ">
        <h2 className="text-2xl font-bold">Trsuted by over 120 + companies</h2>
        <div className="container mx-auto mt-5 flex flex-wrap items-center justify-between gap-5">
          <img
            className="brand"
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
            alt=""
          />
          <img
            className="brand"
            src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
            alt=""
          />
          <img
            className="brand"
            src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
            alt=""
          />
          <img
            className="brand"
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
            alt=""
          />
          <img
            className="brand"
            src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg"
            alt=""
          />
          <img
            className="brand"
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
            alt=""
          />
          <img
            className="brand"
            src="https://s.udemycdn.com/partner-logos/v4/tcs-dark.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Trusted;
