import React from "react";
import BasePage from "../../layout/BasePage";

const Footer = () => {
  return (
    <BasePage className="bg-fourth py-6 ">
      <div className="flex justify-between">
        <div className="flex space-x-4 items-center">
          <a href="#home">
            <img src="./img/icons.svg" className="w-16" alt="logo" />
          </a>
          <img src="./img/copyright.svg" alt="" />
          <p className="text-first">2021</p>
        </div>
        <div className="flex space-x-4 items-center">
          <a href="mailto:mehulgawhale123@gmail.com?subject=query&cc=mehulgawhale123@gmail.com">
            <img src="./img/mail.svg" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/mehul-gawhale/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="./img/linkedin.svg" alt="" />
          </a>
          <a
            href="https://github.com/mehul2410"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="./img/github.svg" alt="" />
          </a>
        </div>
      </div>
    </BasePage>
  );
};

export default Footer;
