import React, { useState } from 'react';
import { FaArrowRight, FaRegCheckCircle } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const [btnLoading, setBtnLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const course = useLoaderData();
  const { title, intro_text, thumbnail_url } = course;

  const handleSubmit = (event) => {
    event.preventDefault();
    setBtnLoading(true);
    setTimeout(() => {
      setBtnLoading(false);
      setSuccess(true);
    }, 1000);
  };

  return (
    <section className="px-2 py-5">
      <div className="checkout-container container mx-auto flex items-center justify-center">
        <div className="checkout-card rounded px-5 py-8 grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <img className="rounded" src={thumbnail_url} alt="" />
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-gray-600">{intro_text}</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="mb-1 text-sm text-zinc-400">
                Your Name
              </label>
              <input className="input" id="name" type="text" name="name" required />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="card_number" className="mb-1 text-sm text-zinc-400">
                Card Number
              </label>
              <input className="input" id="card_number" type="number" name="card_number" required />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="exp_date" className="mb-1 text-sm text-zinc-400">
                Exp Date
              </label>
              <input className="input" id="exp_date" type="date" name="exp_date" required />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="cvc" className="mb-1 text-sm text-zinc-400">
                CVC
              </label>
              <input className="input" id="cvc" type="number" name="cvc" required />
            </div>
            <button
              disabled={btnLoading || success}
              className={`${
                success
                  ? 'btn-completed bg-emerald-500 justify-center'
                  : 'bg-cpurple justify-between'
              } w-full px-3 py-3  text-white flex items-center rounded transition-all hover:bg-violet-600`}>
              {btnLoading ? (
                <div className="w-full flex items-center justify-center">
                  <svg
                    class="mr-2 w-6 h-6 text-cpurple fill-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              ) : !success ? (
                <>
                  <span> Checkout </span> <FaArrowRight></FaArrowRight>
                </>
              ) : (
                <FaRegCheckCircle className="text-2xl"></FaRegCheckCircle>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
