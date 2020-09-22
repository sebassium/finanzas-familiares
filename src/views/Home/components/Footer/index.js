import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default () => {
  const formUrl = 'https://forms.gle/2592Zt6XZeZdkHGK6';
  const ytUrl = 'https://www.youtube.com/c/MedellinProspera';
  const fbUrl = 'https://www.facebook.com/medellinprospera';
  const igUrl = 'https://www.instagram.com/medellinprospera';
  const wappUrl = 'https://api.whatsapp.com/send?phone=573007750512&text=%C2%A1Hola,%20quiero%20m%C3%A1s%20info%20sobre%20Finanzas%20Familiares!';

  return (
    <div className="py-10 bg-teal-400">
      <div className="mx-auto h-full flex px-4 lg:px-16">
        <div className="w-1/2 flex">
          <a href={formUrl} target='_blank' rel="noopener noreferrer">
            <p className="mx-2 p-1 text-white hover:bg-teal-800">Webinar</p>
          </a>
          <a href={wappUrl} target='_blank' rel="noopener noreferrer">
            <p className="mx-2 p-1 text-white hover:bg-teal-800">Contáctanos</p>
        </a>
        </div>
        <div className="w-1/2 flex justify-end">
          <a href={fbUrl} target='_blank' rel="noopener noreferrer" className="mx-2 text-white text-xl pt-1 hover:text-teal-800"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href={igUrl} target='_blank' rel="noopener noreferrer" className="mx-2 text-white text-xl pt-1 hover:text-teal-800"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href={ytUrl} target='_blank' rel="noopener noreferrer" className="mx-2 text-white text-xl pt-1 hover:text-teal-800"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
      </div>
    </div>
  );
};