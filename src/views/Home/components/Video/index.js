import React from "react";
import ReactPlayer from "react-player";

export default () => {

    const videoUrl = 'https://youtu.be/ylrCzPqAxrE';
    const formUrl = 'https://forms.gle/2592Zt6XZeZdkHGK6';

  return (

    <div className="py-20 px-6 text-center bg-teal-400 px-4 lg:px-16" id='video'>
      <h1 className="font-bold text-5xl text-center mb-8 text-white leading-none">Inscríbete a nuestro webinar informativo</h1>
      <div className="mx-auto h-full lg:flex lg:justify-between xl:px-64 my-6">
         <ReactPlayer
            url={videoUrl}
            controls={true}
            volume={0.4}
            width={'100%'}
            height={'35rem'}
         />
      </div>
        <a href={formUrl} target='_blank' rel="noopener noreferrer">
            <button className="text-3xl bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Inscríbete aquí!</button>
        </a>
    </div>
  );
};
