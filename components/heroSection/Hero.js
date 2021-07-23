import React from "react";

const Hero = () => {
  return (
    <div className=" flex flex-wrap justify-between w-full items-center py-32">
      <div className="max-w-md w-1/2 z-10 ">
        <h4 className="text-fourth font-extrabold text-3xl">Hi There, I’m</h4>
        <h2 className="text-fourth font-extrabold text-6xl">Mehul Gawhale</h2>
        <h3 className="text-fourth font-extrabold text-5xl">
          UI/UX Designer & Developer
        </h3>
      </div>
      <div className="min-w-max z-10">
        <img src="./img/mehul.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
