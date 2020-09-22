import React from "react";

export default () => {

    const formUrl = 'https://forms.gle/2592Zt6XZeZdkHGK6';
  return (
    <div className="mx-auto h-auto w-full flex px-4 lg:px-16 pt-6 absolute">
      <div className="w-1/2 flex">
        {/*<p className="mx-2">LOGO</p>*/}
      </div>
      <div className="w-1/2 flex justify-end">
          <a href={formUrl} target='_blank' rel="noopener noreferrer">
            <div className="mx-2 p-1 bg-yellow-400 hover:bg-yellow-500 hover:text-white">
                ¡Webinar gratis!
            </div>
          </a>
      </div>
    </div>
  );
};
