import "./appHomePage.scss";
import React from "react";
import HeroSection from "../heroSection/HeroSection";
import AboutMeSection from "../aboutMeSection/AboutMeSection.jsx";

const AppHomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
    </>
  );
};

export default AppHomePage;
