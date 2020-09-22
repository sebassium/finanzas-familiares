import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="mx-auto h-auto w-full flex px-4 lg:px-16 pt-6 absolute">
      <div className="w-1/2 flex">
        <p className="mx-2">LOGO</p>
      </div>
      <div className="w-1/2 flex justify-end">
        <Link to="/#" className="mx-2">
          Products
        </Link>
        <Link to="/login" className="mx-2">
          Login
        </Link>
        <Link to="/signup" className="mx-2">
          Signup
        </Link>
      </div>
    </div>
  );
};
