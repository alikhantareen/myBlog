import React from "react";
import "font-awesome/css/font-awesome.min.css";
import Header from "./header";
import Footer from "./footer";

const MainScreen = () => {
  return (
    <div className="flex flex-col justify-between h-screen dark:bg-black dark:text-white">
      <Header />
      <div className="w-full flex flex-col justify-center items-stretch h-full dark:bg-black dark:text-white">
        <div className="flex flex-col justify-content items-center w-auto gap-10">
          <p className="font-semibold font-mono text-4xl dark:bg-black dark:text-white">Ali Khan Tareen</p>
          <p className="font-mono text-2xl dark:bg-black dark:text-white">On a journey to build great UIs</p>
          <div className="flex justify-between w-60">
            <i class="fa fa-facebook fa-2x dark:bg-black dark:text-white"></i>
            <i class="fa fa-linkedin fa-2x dark:bg-black dark:text-white"></i>
            <i class="fa fa-google fa-2x dark:bg-black dark:text-white"></i>
            <i class="fa fa-github fa-2x dark:bg-black dark:text-white"></i>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default MainScreen;
