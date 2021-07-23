import React from "react";
import About from "../components/about/About";
import Hero from "../components/heroSection/Hero";
import Skill from "../components/skills/Skill";
import BaseLayout from "../layout/BaseLayout";
import BasePage from "../layout/BasePage";

const index = () => {
  return (
    <BaseLayout>
      <BasePage>
        <Hero />
        <About />
        <Skill />
      </BasePage>
    </BaseLayout>
  );
};

export default index;
