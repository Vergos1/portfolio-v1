import "../styles/pages/homePage.scss";
import React from "react";
import HeroSection from "../components/heroSection/HeroSection";
import AboutMeSection from "../components/aboutMeSection/AboutMeSection.jsx";
import SkillsSection from "../components/skillsSection/SkillsSection";
import PortfolioSection from "../components/portfolioSection/PortfolioSection";

const HomePage = () => {
	return (
		<>
			<HeroSection />
			<AboutMeSection />
			<SkillsSection />
			<PortfolioSection />
		</>
	);
};

export default HomePage;
