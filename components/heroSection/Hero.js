import React from "react";

const Hero = () => {
  return (
    <div
      className=" flex flex-wrap justify-between w-full items-center py-44  md:justify-center md:items-center lg:px-20"
      id="home"
    >
      <div className="max-w-md w-1/2 z-10 md:w-full">
        <h4 className="text-fourth font-extrabold text-3xl">Hi There, I’m</h4>
        <h2 className="text-fourth font-extrabold text-6xl">Mehul Gawhale</h2>
        <h3 className="text-fourth font-extrabold text-5xl">
          UI/UX Designer & Developer
        </h3>
      </div>
      <div className="min-w-max z-10">
        <img
          className="md:w-img md:mt-10 w-full"
          src="./img/mehul.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
