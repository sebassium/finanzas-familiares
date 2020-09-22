import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

export default () => {
  return (
      <div className="mx-auto min-h-screen md:flex px-4 lg:px-16 items-center justify-center">

        <div className="md:w-1/2 pt-16">
          <h1 className="font-bold text-6xl leading-none mb-6">Finanzas Familiares</h1>
          <p className="text-3xl mb-6">
            Programa de entrenamientos financieros para que tu familia sea próspera.
          </p>
            <Link to="#video" scroll={el => el.scrollIntoView({ behavior: 'smooth' })}>
          <button className="text-xl bg-teal-400 hover:bg-teal-500 text-white py-2 px-4 rounded">Ver más</button>
            </Link>
            </div>

         <div className="md:w-1/2 pb-12">
           <img
               className=""
               src={'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1600740931/wmnaeehyim0sqpyocd2i.png'}
               alt=''
           />
          </div>

      </div>
  );
};
