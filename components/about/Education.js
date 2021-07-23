import React from "react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      year: "2015-2016",
      college: "St Joseph's High School kalamboli",
      university: "SSC",
      grade: "80.80 %",
      degree: "",
    },
    {
      id: 2,
      year: "2016-2018",
      college: "KLE College of Science and commerce",
      university: "HSC",
      grade: "72.15 %",
      degree: "Information technology",
    },
    {
      id: 3,
      year: "2018-present",
      college:
        "Mahatma Education Society's Pillai HOC College Of Education And Research",
      university: "Mumbai University",
      grade: "8.1",
      degree: "Information technology - Persuing",
    },
  ];

  return (
    <div className="my-14">
      <h2 className="text-5xl font-bold text-center text-fourth">Education</h2>
      {educationData.map((item) => {
        return (
          <div
            className="bg-first p-11 my-10 space-y-2 rounded-xl"
            key={item.id}
          >
            <div className="flex items-center">
              <img className="w-10" src="./img/calendar.svg" alt="" />
              <span className="ml-6 text-fourth">{item.year}</span>
            </div>
            <h2 className="text-3xl font-extrabold text-third">
              {item.college}
            </h2>
            <h3 className="text-2xl text-fourth font-bold">
              {item.university}
            </h3>
            <h3 className="text-2xl text-fourth font-medium">{item.degree} </h3>
            <p className="text-xl text-fourth ">{item.grade}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
