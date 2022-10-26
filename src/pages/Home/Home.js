import React from 'react';
import { FaRegChartBar } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsBullseye } from 'react-icons/bs';
import './Home.css';
const Home = () => {
  return (
    <>
      <section className="hero px-2">
        <div className="hero-content flex flex-col items-center text-center text-white">
          <h2 className="mb-3 text-1xl font-semibold">KNOWLEDGE IS POWER</h2>
          <h1 className="mb-6 text-4xl font-bold">BrainHack the ultimate learning platform</h1>
          <p className="mb-6 text-1xl text-slate-200">
            We have over 1,200 + courses on different programming languages created by our
            <br className="hidden md:block" />
            expert programmers. Our courses are simplified and easy to understand.
            <br className="hidden md:block" /> So why wait? start your programming journey right
            now!
          </p>
          <button className="px-5 py-3 rounded bg-cpurple text-white transition-all hover:bg-violet-600">
            Get Started Now
          </button>
        </div>
      </section>
      <div className="shape-container">
        <div className="shape">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,128L120,154.7C240,181,480,235,720,234.7C960,235,1200,181,1320,154.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <section className="px-2">
        <div className="container mx-auto">
          <div className="features flex flex-wrap items-center justify-center gap-4">
            <div className="rounded feature">
              <div className="text-2xl bg-violet-500 p-2 rounded text-white">
                <FaRegChartBar></FaRegChartBar>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Course Structure</h4>
                <p className="text-sm text-slate-400">
                  Courses structured in a very planned manner to help learn efficiently.
                </p>
              </div>
            </div>
            <div className="rounded feature">
              <div className="text-2xl bg-violet-500 p-2 rounded text-white">
                <BsBullseye></BsBullseye>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Detailed Explanations</h4>
                <p className="text-sm text-slate-400">
                  Experts have simplified the course in a very detailed way.
                </p>
              </div>
            </div>
            <div className="rounded feature">
              <div className="text-2xl bg-violet-500 p-2 rounded text-white">
                <AiOutlineSearch></AiOutlineSearch>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Researched</h4>
                <p className="text-sm text-slate-400">
                  Our experts have researched and created awesome courses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
