import React from "react";
import BasePage from "../../layout/BasePage";

const Header = () => {
  const navLink = [
    {
      id: 1,
      name: "About",
      link: "#about",
    },
    {
      id: 2,
      name: "Skills",
      link: "#about",
    },
    {
      id: 3,
      name: "Projects",
      link: "#project",
    },
    {
      id: 4,
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <BasePage className="py-8">
      <div className="flex justify-between items-center z-10">
        <div className="">
          <h2 className="font-extrabold text-fourth text-2xl">Mehul Gawhale</h2>
        </div>
        <div className="flex space-x-10">
          {navLink.map((item) => {
            return (
              <div key={item.id}>
                <a href={item.link} className="text-xl text-fourth font-medium">
                  {item.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </BasePage>
  );
};

export default Header;
