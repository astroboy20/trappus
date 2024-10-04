import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const Options = () => {
  return (
    <div className="relative w-full h-fit p-[6%] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/Enter.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div className="flex flex-wrap gap-10 justify-center items-center">
          <div className="flex flex-col gap-5 items-center group">
            <div className="bg-white rounded-full h-[250px] w-[250px] border-4 border-black flex items-center justify-center transform transition-transform duration-300 group-hover:skew-y-3 group-hover:skew-x-3">
              <h1 className="text-[20px] text-center text-black font-bold">
                HOROSCOPE
              </h1>
            </div>
            <button className="w-full bg-[#e21c21] text-black rounded-full p-3 flex gap-2 items-center justify-center">
              Enter <IoMdArrowForward />
            </button>
          </div>

          <div className="flex flex-col gap-5 items-center group">
            <div className="bg-white rounded-full h-[250px] w-[250px] border-4 border-black flex items-center justify-center transform transition-transform duration-300 group-hover:skew-y-3 group-hover:skew-x-3">
              <h1 className="text-[20px] text-center text-black font-bold">
                REPORTS
              </h1>
            </div>
            <button className="w-full bg-[#e21c21] text-black rounded-full p-3 flex gap-2 items-center justify-center">
              Enter <IoMdArrowForward />
            </button>
          </div>

          <div className="flex flex-col gap-5 items-center group">
            <div className="bg-white rounded-full h-[250px] w-[250px] border-4 border-black flex items-center justify-center transform transition-transform duration-300 group-hover:skew-y-3 group-hover:skew-x-3">
              <h1 className="text-[20px] text-center text-black font-bold">
                PERIODIC TABLE
              </h1>
            </div>
            <button className="w-full bg-[#e21c21] text-black rounded-full p-3 flex gap-2 items-center justify-center">
              Enter <IoMdArrowForward />
            </button>
          </div>

          <div className="flex flex-col gap-5 items-center group">
            <div className="bg-white rounded-full h-[250px] w-[250px] border-4 border-black flex items-center justify-center transform transition-transform duration-300 group-hover:skew-y-3 group-hover:skew-x-3">
              <h1 className="text-[20px] text-center text-black font-bold">
                CONTACT SELF
              </h1>
            </div>
            <button className="w-full bg-[#e21c21] text-black rounded-full p-3 flex gap-2 items-center justify-center">
              Enter <IoMdArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Options };
