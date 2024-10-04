import React from "react";

const Lessons = () => {
  return (
    <div className="pt-[150px] lg:pt-[250px] p-[6%]">
      <div className="flex flex-col gap-10 justify-center items-center">
      <h1 className="text-center font-bold text-[40px]"> Lessons</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TrnLCFsN5i8"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="m-auto] w-full h-[200px] lg:w-[600px] lg:h-[400px]"
        ></iframe>
        <button className="bg-[#282626] px-20 py-2 w-fit text-white">Paid Lessons</button>
      </div>
    </div>
  );
};

export { Lessons };
// https://www.youtube.com/watch?v=TrnLCFsN5i8
