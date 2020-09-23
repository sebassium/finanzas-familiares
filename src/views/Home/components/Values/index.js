import React from "react";

export default () => {

  const logoUrl = 'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1600806353/w5qon57cumhkclpz3tpz.png';

  return (
    <div className="py-20">
      <div className="mx-auto h-full lg:flex px-4 lg:px-16 items-center justify-center">

        <div className="lg:w-1/2">
          <h1 className="font-bold text-5xl md:text-6xl leading-none mb-6">¿Quiénes somos?</h1>
          <p className="text-xl mb-4">
            Nuestra Propuesta de Valor de Medellín Próspera: "Formamos en Competencias Financieras, Relacionales y Emocionales con un modelo Educativo Experiencial que Inspira Personas a desarrollar su Potencial para Crear Riqueza Integral".
          </p>
        </div>

        <div className="lg:w-1/2 flex justify-center" >
          <img
              src={logoUrl}
              alt=''
              style={{ maxHeight: '35rem'}}
          />
        </div>
      </div>
    </div>
  );
};