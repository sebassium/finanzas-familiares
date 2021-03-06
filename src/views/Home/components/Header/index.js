import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

export default () => {

  const bgUrl = 'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1600871903/pltj3ojdsrbp1cqpugl9.png';

  return (
      <div className="mx-auto min-h-screen md:flex px-4 lg:px-16 items-center justify-center">

        <div className="md:w-2/5 pt-24 lg:pt-0">
          <h1 className="font-bold text-6xl leading-none mb-6">Finanzas Familiares</h1>
          <p className="text-3xl mb-6 leading-none">
            Programa de entrenamientos financieros para que tu familia sea próspera.
          </p>
            <Link to="#video" scroll={el => el.scrollIntoView({ behavior: 'smooth' })}>
          <button className="text-xl bg-teal-400 hover:bg-teal-500 text-white py-2 px-4 rounded">Ver más</button>
            </Link>
            </div>

         <div className="md:w-3/5 pb-12 mt-12 lg:mt-0">
           <img
               src={bgUrl}
               alt=''
           />
          </div>

      </div>
  );
};
