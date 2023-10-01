import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Education from "../components/Education";

const Home = () => {
  return (
    <>
      {/* hero section start */}
      <HeroSection />
      {/* hero section end */}

      {/* Services section start */}
      <Services />
      {/* Services section end */}

      {/* Skills section start */}
      <Skills />
      {/* Skills section end */}

      {/* Education section start */}
      <Education />
      {/* Education section end */}
    </>
  );
};

export default Home;
