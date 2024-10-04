"use client";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaBarsStaggered } from "react-icons/fa6";
import { MobileNav } from "./mobile-nav";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <header className="w-full bg-black text-white py-[8%] lg:py-[3%] px-[8%] flex flex-col gap-12 fixed z-[100]">
      <nav className="hidden lg:flex gap-5 m-auto justify-center text-[18px]">
        <Link href="/">Home</Link>
        <Link href="/about">About us</Link>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>Trapp</TooltipTrigger>
            <TooltipContent>
              <div className="flex flex-col p-5 gap-5 text-[18px]">
                {" "}
                <Link href={"/"}>TRAPP OVERVIEW ORBITAL DISPLAY</Link>
                <Link href={"/"}>PERIODIC TABLE</Link>
                <Link href={"/"}>TOMAD</Link>
                <Link href={"/"}>SPDF</Link>
                <Link href={"/"}>COLOR CODED</Link>
                <Link href={"/"}>TRAPP TRANSPONDER</Link>
                <Link href={"/"}>TPC</Link>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <p></p>
        <Link href="discovery-videos">Lessons</Link>
        <p>elemProps</p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>Blog</TooltipTrigger>
            <TooltipContent>
              <div className="flex flex-col p-5 gap-5 text-[18px]">
                {" "}
                <Link href={"/"}>Press Releases</Link>
                <Link href={"/"}>Pictures and Videos</Link>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>Contact</TooltipTrigger>
            <TooltipContent>
              <div className="flex flex-col p-5 gap-5 text-[18px]">
                {" "}
                <Link href={"/"}>Support</Link>
                <Link href={"/"}>FAQ</Link>
                <Link href={"/"}>Reviews</Link>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <p>planets-horoscope</p>
        <p>my-duplicate</p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>More</TooltipTrigger>
            <TooltipContent>
              <div className="flex flex-col p-5 gap-5 text-[18px]">
                {" "}
                <Link href={"/"}>Investments and Licensing</Link>
                <Link href={"/"}>How To Invest</Link>
                <Link href={"/"}>SEC Rules</Link>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>

      <div className="flex justify-between items-center">
        <div className="hidden lg:flex flex-col font-[18px]">
          <p>+1 973-595-7775</p>
          <p>trappus6.666@gmail.com</p>
        </div>
        <h1 className="text-[40px]">Trappus</h1>
        <div className="hidden lg:flex gap-2 items-center text-[18px]">
          <CgProfile />
          <p>Name</p>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex lg:hidden">
          <FaBarsStaggered size={30} onClick={handleClick} />
        </div>
      </div>

      {/* Mobile Navigation */}
      {show && <MobileNav handleClick={handleClick} />}
    </header>
  );
};

export { Header };
