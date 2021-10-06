import React from "react";
import { Link } from "react-router-dom";
import Toggle from "../ThemeToggle";

const Header = () => {
  return (
    <div className="w-full bg-gray-100 h-16 flex justify-around items-center p-6 dark:bg-black dark:text-white">
      <div className="font-bold font-mono flex items-center gap-2 text-xl dark:bg-black dark:text-white">
        <Link to="/">&gt; cd $HOME</Link>
        <div id="animate"></div>
      </div>
      <div className="font-mono flex justify-around items-center gap-10">
        <Link to="/blogpage">
          <h1 className="text-xl dark:bg-black dark:text-white">Blogs</h1>
        </Link>
        <Link to="/about">
          <h1 className="text-xl dark:bg-black dark:text-white">About</h1>
        </Link>
        <div>
          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
