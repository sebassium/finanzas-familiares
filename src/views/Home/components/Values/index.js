import React from "react";

export default () => {
  return (
    <div className="py-20 bg-red-600">
      <div className="mx-auto h-full lg:flex px-4 lg:px-16">
        <div class="lg:w-1/2 bg-gray-400">
          <h1 className="font-bold text-5xl md:text-6xl">Quienes somos?</h1>
          <p className="text-base mb-4">
            Nuestra Propuesta de Valor de Medellin Prospera: "Formamos en Competencias Financieras, Relacionales y Emocionales con un modelo Educativo Experiencial que Inspira Personas a desarrollar su Potencial para Crear Riqueza Integral".
          </p>
          <button className="text-lg">Ver más</button>
        </div>
        <div class="lg:w-1/2 bg-gray-500">Hola</div>
      </div>
    </div>
  );
};
