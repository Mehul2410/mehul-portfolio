import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const BaseLayout = ({ children }) => {
  return (
    <div className="bg-second dark:bg-newBlack h-screen overflow-y-scroll scrollbar-hide">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
