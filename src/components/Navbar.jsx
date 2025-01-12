import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="row-1 w-full h-20 bg-gradient-to-b bg-gray-100 from-slate-300 flex items-center justify-between md:px-28">
        <h1 className="font-bold text-2xl text-[#003ADE]">
          STORY<span className="text-[#00DB39]">SPARK</span>
        </h1>
        <Link to="/login">
          <button className="px-10 rounded py-2 bg-black text-white">
            Admin 🙋🏻‍♂️
          </button>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
