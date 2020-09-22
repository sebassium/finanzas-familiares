import React from "react";

export default () => {
  return (
    <div className="py-20 border-b-2">
      <div className="mx-auto h-full lg:flex px-4 lg:px-16 items-center justify-center">
        <div className="lg:w-1/2" >
          <img
              className=""
              src={'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1600805518/q7jbskbaenaw08tp2hfy.png'}
              alt=''
          />

        </div>
        <div className="lg:w-1/2">
          <h1 className="font-bold text-5xl md:text-6xl">Contenido</h1>
          <p className="text-base mb-4">
            1.- Inteligencia Financiera:

            Administración del dinero, manejo de los créditos y deudas, destructores de patrimonio, tarjetas de crédito, educación financiera para los hijos, Inversión en la primer vivienda, Apalancamiento financiero.

            2.- Consciencia de Riqueza:

            Actos creativos conscientes, patrones mentales del dinero, improntas emocionales de manejo del dinero.

            3.- Legal:

            Capitulaciones, contratos, fideicomisos, patrimonios de familia, y más.

            4.- Tributario:

            Planeación tributaria, optimizar los impuestos, UGP,

            5.- Emocional:

            Apegos, miedos, rencores, relación con la genealogía familiar, Honrar a Papá y Mamá, ... y más.
          </p>
          <h2 className="font-bold text-xl">Inscríbete al webinar informativo</h2>
          <button className="text-3xl bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded">Ver más</button>
        </div>
      </div>
    </div>
  );
};
