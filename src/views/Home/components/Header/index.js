import React from "react";

export default () => {
  return (
      <div className="mx-auto lg:flex px-6 lg:px-16 items-center h-screen">
        <div className="w-5/7 pt-16">
          <h1 className="font-bold text-6xl leading-none mb-6">Finanzas Familiares</h1>
          <p className="text-3xl mb-6">
            Programa de entrenamientos financieros para que la tu familia sea próspera.
          </p>
          <button className="text-3xl bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded">Ver más</button>
        </div>
         <div className="w-2/7 flex justify-center pt-10">
           <img
               className="w-100 xl:max-w-3xl"
               src={'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1600740931/wmnaeehyim0sqpyocd2i.png'}
               alt=''
           />
          </div>
      </div>
  );
};
