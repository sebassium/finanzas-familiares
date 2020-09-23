import React from "react";

export default () => {
  const formUrl = 'https://forms.gle/2592Zt6XZeZdkHGK6';
  const contentUrl = 'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1600871902/atiibruhzrtdohgwv6y8.png';

  return (
    <div className="py-20 border-b-2">
      <div className="mx-auto h-full lg:flex px-4 lg:px-16 items-center justify-center">
        <div className="lg:w-1/2 lg:mr-8 flex justify-center" >
          <img
              src={contentUrl}
              alt=''
              style={{ maxHeight: '35rem'}}
          />

        </div>
        <div className="lg:w-1/2">
          <h1 className="font-bold text-5xl md:text-6xl">Contenido</h1>

          <h2 className="font-bold text-xl">1. Inteligencia Financiera:</h2>
          <p className="text-base mb-4">
            Administración del dinero, manejo de los créditos y deudas, destructores de patrimonio, tarjetas de crédito, educación financiera para los hijos, Inversión en la primer vivienda, Apalancamiento financiero.
          </p>

          <h2 className="font-bold text-xl">2. Consciencia de Riqueza:</h2>
          <p className="text-base mb-4">
            Actos creativos conscientes, patrones mentales del dinero, improntas emocionales de manejo del dinero.
          </p>

          <h2 className="font-bold text-xl">3. Legal:</h2>
          <p className="text-base mb-4">
            Capitulaciones, contratos, fideicomisos, patrimonios de familia, y más.
          </p>

          <h2 className="font-bold text-xl">4. Tributario:</h2>
          <p className="text-base mb-4">
            Planeación tributaria, optimizar los impuestos, UGPP.
          </p>

          <h2 className="font-bold text-xl">5. Emocional:</h2>
          <p className="text-base mb-4">
            Apegos, miedos, rencores, relación con la genealogía familiar, Honrar a Papá y Mamá, y más.
          </p>

          <a href={formUrl} target='_blank' rel="noopener noreferrer">
            <button className="text-3xl bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded mb-6">Inscríbete aquí!</button>
          </a>
        </div>
      </div>
    </div>
  );
};
