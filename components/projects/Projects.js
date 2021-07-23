import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Let India Breathe",
      shortdesc: "Revamped the php site to nextjs",
      url: "",
      features: [
        "Dynamic Project Routes, project data is now fetched from a JSON file.",
        "All types of responses go into a single google sheet workbook.",
        "Static rendering and preloading of all pages using NextJS.",
        "Multilingual email templates",
      ],
    },
    {
      id: 2,
      name: "Oye Beauty",
      shortdesc: "Designed and Developed the Website for Oye Busy Technology",
      url: "",
      features: [
        "Dynamic Project Routes,pages data is fetched from a API with React Context Hook.",
        "Build a Custom Date and time picker.",
        "Implemented adaptive way to make responsive website with different view",
      ],
    },
    {
      id: 3,
      name: "ISEWA",
      shortdesc: "Wordpress Website Build with Elementor",
      url: "",
      features: ["LearnPress", "Woocommerce"],
    },
    {
      id: 4,
      name: "IamTrans",
      shortdesc: "Wordpress Website Build with Themeco Pro Builder",
      url: "",
      features: [],
    },
    {
      id: 5,
      name: "Marknote",
      shortdesc:
        "An Inspiration of Google keep Application build with nextjs and Strapi (Headless cms backend) ",
      url: "",
      features: [
        "MarkDown editor with functionalites like",
        "share",
        "edit",
        "delete",
      ],
    },
  ];
  return <div></div>;
};

export default Projects;
