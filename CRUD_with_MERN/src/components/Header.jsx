import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-[10vh] bg-slate-500 flex justify-center items-center">
      <button className="bg-emerald-500 rounded font-bold m-1 p-2 w-16 ">
        <Link to={"/"}>Back</Link>
      </button>
    </div>
  );
};

export default Header;
