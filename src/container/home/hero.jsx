import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="pt-[150px] lg:pt-[200px]"> {/* Use padding-top instead */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full justify-center py-[15%] lg:py-[6%]">
        <div>
          <Image
            src="/images/logo.jpg"
            width={150}
            height={150}
            className="animate-spin rounded-full m-auto" // Adds rotation
            style={{ animationDuration: "10s" }} // Slows down the spin
          />
        </div>
        <div className="flex flex-col gap-5 text-center">
          <h1 className="text-[50px] text-[#27211e] font-bold leading-[50px]">
            WELCOME TO TRAPPUS
          </h1>
          <p className="text-[30px] text-[#ff4040] font-bold italic">
            IF YOU DARE ENTER
          </p>
        </div>
      </div>
    </div>
  );
};

export { Hero };
