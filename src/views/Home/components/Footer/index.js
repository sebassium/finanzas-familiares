import React from "react";

export default () => {
  return (
    <div className="py-10 bg-blue-400">
      <div className="mx-auto h-full flex px-4 lg:px-16">
        <div className="w-1/2 flex">
          <p className="mx-2">Contact</p>
          <p className="mx-2">Terms</p>
          <p className="mx-2">Provacy</p>
        </div>
        <div className="w-1/2 flex justify-end">
          <p className="mx-2">FB</p>
          <p className="mx-2">IG</p>
        </div>
      </div>
    </div>
  );
};
