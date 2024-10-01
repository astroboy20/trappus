import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaBarsStaggered } from "react-icons/fa6";
const Header = () => {
  return (
    <header className="w-full bg-black text-white py-[8%] lg:py-[3%] px-[8%] flex flex-col gap-12">
      <nav className="hidden lg:flex gap-5 m-auto justify-center text-[18px]">
        <p>Home</p>
        <p>About us</p>
        <p>Trapp</p>
        <p>Lessons</p>
        <p>elemProps</p>
        <p>Blog</p>
        <p>Contact</p>
        <p>planets-horoscope</p>
        <p>my-duplicate</p>
        <p>More</p>
      </nav>

      <div className="flex justify-between items-center">
        <div className="hidden lg:flex font-[18px]">
          <p>+1 973-595-7775</p>
          <p>trappus6.666@gmail.com</p>
        </div>
        <h1 className="text-[40px]">Trappus</h1>
        <div className="hidden lg:flex gap-2 items-center text-[18px]">
          <CgProfile />
          <p>Name</p>
        </div>

        <div className="flex lg:hidden">
          <FaBarsStaggered size={30}/>
        </div>
      </div>
    </header>
  );
};

export { Header };
