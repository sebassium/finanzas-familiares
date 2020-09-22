import React from "react";

export default () => {
  return (
    <div className="flex h-screen bg-red-500 justify-center items-center">
      <div className="mx-auto max-w-sm border p-4">
        <h1 className="font-bold text-4xl">Signup</h1>
        <label htmlFor="email">
          Email
          <input type="email" id="email" className="w-full border" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" id="password" className="w-full border" />
        </label>
        <button className="text-lg">Signup</button>
      </div>
    </div>
  );
};
