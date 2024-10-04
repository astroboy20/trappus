import React from "react";
import { MdClose } from "react-icons/md";

const MobileNav = ({ handleClick }) => {
  return (
    <div className="lg:hidden fixed inset-0 w-full h-[100dvh] bg-white text-black z-50 flex flex-col p-5 gap-5 text-[18px]">
      <div className="flex justify-end">
        <MdClose size={35} onClick={handleClick} />
      </div>
      <nav className="text center flex flex-col gap-5 justify-center items-center text-[18px]">
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
    </div>
  );
};

export { MobileNav };
