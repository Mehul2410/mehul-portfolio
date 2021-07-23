import React from "react";
import BasePage from "../../layout/BasePage";

const Footer = () => {
  return (
    <BasePage className="bg-fourth py-6 ">
      <div className="flex justify-between">
        <div className="flex space-x-4 items-center">
          <img src="./img/copyright.svg" alt="" />
          <p className="text-first">2021</p>
        </div>
        <div className="flex space-x-4 items-center">
          <img src="./img/mail.svg" alt="" />
          <img src="./img/linkedin.svg" alt="" />
          <img src="./img/github.svg" alt="" />
        </div>
      </div>
    </BasePage>
  );
};

export default Footer;
