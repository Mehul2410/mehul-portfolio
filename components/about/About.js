import React from "react";
import Education from "./Education";
import Experience from "./Experience";

const About = () => {
  return (
    <div className="pt-20" id="about">
      <div className="bg-first p-16 mb-10 rounded-3xl flex flex-col justify-center items-center max-w-6xl m-auto">
        <h2 className="text-5xl font-bold text-third">About Me</h2>
        <div className="flex flex-wrap w-full justify-evenly my-16">
          <div className="p-11">
            <img className="w-img " src="./img/me.svg" alt="" />
          </div>
          <div className="max-w-lg p-11 flex flex-col justify-center bg-white rounded-3xl space-y-5 text-xl text-fourth">
            <p>
              Hey there, I am Mehul, a developer, and designer from Mumbai. I
              Design things and solve problems.
            </p>
            <p>
              Currently pursuing a bachelor's degree in the 3rd year of IT
              engineering. I like to brainstorm new ideas!
            </p>
            <p>
              Apart from that, I am a teacher, entrepreneur, futurist, and tech
              enthusiast. Feel free to share your thoughts, I am all ears. I
              will try to help in every way possible.
            </p>
          </div>
        </div>
        <h2 className="text-5xl font-bold text-third">My Goals</h2>
        <div className="flex flex-wrap w-full justify-evenly my-16">
          <div className="max-w-lg p-11 flex flex-col justify-center bg-white rounded-3xl ">
            <ul className="text-xl list-disc space-y-5 text-fourth">
              <li>To do things which will make me proud.</li>
              <li>Share my ideas to help others.</li>
              <li>To do things that make me a better person.</li>
              <li>
                To work in an organization where I can utilize and apply my
                knowledge, skills which would enable me to grow while fulfilling
                organizational goals
              </li>
            </ul>
          </div>
          <div className="p-11">
            <img className="w-img " src="./img/goal.svg" alt="" />
          </div>
        </div>
      </div>
      <Education />
      <Experience />
    </div>
  );
};

export default About;
