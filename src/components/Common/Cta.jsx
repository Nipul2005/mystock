import React from 'react'
import { Link } from 'react-router-dom';

function Cta({heading, text, icon}) {
  return (
    <section className="w-full relative">
      <div className="bg-primary text-white p-10 md:p-16 text-center">
        <h2 className="text-4xl font-bold">{heading}</h2>

        <p className="mt-4 text-white/80 max-w-2xl mx-auto">{text}</p>

        <Link
          to="/signup"
          className="inline-flex mt-8 px-8 py-4 rounded-2xl bg-white text-primary font-semibold"
        >
          Become Provider
        </Link>
      </div>
      <div className="absolute md:right-10 -right-30 top-1/2 -translate-y-1/2">
        <i className={`ri-${icon} text-[320px] text-white/20`}></i>
      </div>
    </section>
  );
}

export default Cta