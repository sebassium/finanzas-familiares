import React from "react";

export default () => {
  const formUrl = 'https://forms.gle/2592Zt6XZeZdkHGK6';
  const contentUrl = 'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1600871902/atiibruhzrtdohgwv6y8.png';

  const topics = [
    {
      id: '1',
      title: '1. Inteligencia Financiera:',
      description: 'Administración del dinero, manejo de los créditos y deudas, destructores de patrimonio, tarjetas de crédito, educación financiera para los hijos, Inversión en la primer vivienda, Apalancamiento financiero.'
    },
    {
      id: '2',
      title: '2. Consciencia de Riqueza:',
      description: 'Actos creativos conscientes, patrones mentales del dinero, improntas emocionales de manejo del dinero.'
    },
    {
      id: '3',
      title: '3. Legal:',
      description: 'Capitulaciones, contratos, fideicomisos, patrimonios de familia, y más.'
    },
    {
      id: '4',
      title: '4. Tributario:',
      description: 'Planeación tributaria, optimizar los impuestos, UGPP.'
    },
    {
      id: '5',
      title: '5. Emocional:',
      description: 'Liberar apegos, miedos y rencores;  relación con la genealogía familiar; honrar a papá y a mamá y mucho más.'
    },
    {
      id: '6',
      title: '6. Salud y Nutrición:',
      description: 'Familia saludable con una alimentación energética y balanceada.'
    },
    {
      id: '7',
      title: '7. Sexualidad:',
      description: 'La Energía sexual es de las más poderosas y creadoras de riquezas.'
    },
    {
      id: '8',
      title: '8. Genealogía y Clan Familiar:',
      description: 'Somos la herencia de nuestros ancestros.'
    }
  ]


  return (
    <div className="py-20 border-b-2">
      <div className="mx-auto h-full lg:flex px-4 lg:px-16 items-center justify-center">
        <div className="lg:w-1/2 lg:mr-8 flex justify-center mb-6" >
          <img
              src={contentUrl}
              alt=''
              style={{ maxHeight: '35rem'}}
          />
        </div>

        <div className="lg:w-1/2">
          <h1 className="font-bold text-5xl md:text-6xl">Contenido</h1>
          {topics.map(topic=>(
              <div key={topic.id}>
                <h2 className="font-bold text-xl">{topic.title}</h2>
                <p className="text-base mb-4">{topic.description}</p>
              </div>
          ))}

          <a href={formUrl} target='_blank' rel="noopener noreferrer">
            <button className="text-3xl bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded my-6">Inscríbete aquí!</button>
          </a>
        </div>
      </div>
    </div>
  );
};
