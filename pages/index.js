import React from "react";
import About from "../components/about/About";
import Hero from "../components/heroSection/Hero";
import BaseLayout from "../layout/BaseLayout";
import BasePage from "../layout/BasePage";

const index = () => {
  return (
    <BaseLayout>
      <BasePage>
        <Hero />
        <About />
      </BasePage>
    </BaseLayout>
  );
};

export default index;
