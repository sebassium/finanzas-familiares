import React from "react";
import ReactPlayer from "react-player";

export default () => {

    const videoUrl = 'https://youtu.be/ylrCzPqAxrE';

  return (
    <div className="py-20 px-6 text-center bg-teal-400">
      <h1 className="font-bold text-6xl text-center">Inscríbete a nuestro webinar informativo</h1>
      <div className="mx-auto h-full lg:flex lg:justify-between xl:px-64">
         <ReactPlayer
            url={videoUrl}
            controls={true}
            volume={0.4}
            width={'100%'}
            height={'35rem'}
         />
      </div>
        <button className="text-3xl bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded">Inscríbete aquí!</button>
    </div>
  );
};
