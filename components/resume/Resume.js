import React from "react";

const Resume = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center w-full p-11 my-10">
        <img src="./img/resume.svg" alt="resume" />
        <div className="flex flex-wrap flex-col lg:items-center lg:justify-center">
          <h2 className="text-5xl font-bold text-center text-fourth mb-16">
            What are you looking for ?
          </h2>

          <a
            href="https://drive.google.com/file/d/1UlekddEqAa6cAJLuQyyOpiILZ5DUtycF/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            <p className="flex flex-wrap items-center text-3xl py-5 px-10 sm:text-2xl md:px-7 border border-fourth bg-first font-bold rounded-lg w-max hover:bg-third hover:text-white hover:transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 mr-4 sm:w-10 sm:h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download my Resume
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
