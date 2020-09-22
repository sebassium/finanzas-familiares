import React from "react";

export default () => {
  return (
    <div className="flex items-center h-screen">
      <div className="lg:w-1/2 h-full bg-red-500"></div>
      <div className="lg:w-1/2 mx-auto px-4 max-w-sm">
        <h1 className="font-bold text-4xl">Login</h1>
        <label htmlFor="email">
          Email
          <input type="email" id="email" className="w-full border" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" id="password" className="w-full border" />
        </label>
        <button className="text-lg">Login</button>
      </div>
    </div>
  );
};
