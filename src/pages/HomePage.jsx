import "../styles/pages/homePage.scss";
import React from "react";
import HeroSection from "../components/heroSection/HeroSection";
import AboutMeSection from "../components/aboutMeSection/AboutMeSection.jsx";
import SkillsSection from "../components/skillsSection/SkillsSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
    </>
  );
};

export default HomePage;
