import React from "react";

export default () => {
  return (
    <div className="py-20">
      <div className="mx-auto h-full lg:flex px-4 lg:px-16 items-center justify-center">
        <div class="lg:w-1/2">
          <h1 className="font-bold text-5xl md:text-6xl">Quienes somos?</h1>
          <p className="text-base mb-4">
            Nuestra Propuesta de Valor de Medellin Prospera: "Formamos en Competencias Financieras, Relacionales y Emocionales con un modelo Educativo Experiencial que Inspira Personas a desarrollar su Potencial para Crear Riqueza Integral".
          </p>
          <button className="text-lg">Ver más</button>
        </div>
        <div className="lg:w-1/2" >
          <img
              className=""
              src={'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1600806353/w5qon57cumhkclpz3tpz.png'}
              alt=''
          />

        </div>
      </div>
    </div>
  );
};

