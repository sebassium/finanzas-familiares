import React from "react";

const cards = [1, 2, 3];

export default () => {
  return (
    <div className="py-20 bg-green-400">
      <h1 className="font-bold text-6xl text-center">Beneficios</h1>
      <div className="mx-auto h-full lg:flex px-4 lg:px-16 lg:justify-between">
        {cards.map((card) => (
          <div className="rounded border mb-4 lg:mb-0" key={card}>
            {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">The Coldest Sunset</h2>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
