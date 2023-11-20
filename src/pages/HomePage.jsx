import "../styles/pages/homePage.scss";
import React from "react";
import HeroSection from "../components/heroSection/HeroSection.jsx";
import AboutMeSection from "../components/aboutMeSection/AboutMeSection.jsx";
import SkillsSection from "../components/skillsSection/SkillsSection.jsx";
import PortfolioSection from "../components/portfolioSection/PortfolioSection.jsx";
import ContactsSection from "../components/contactsSection/ContactsSection.jsx";

const HomePage = () => {
	return (
		<>
			<HeroSection />
			<AboutMeSection />
			<SkillsSection />
			<PortfolioSection />
			<ContactsSection />
		</>
	);
};

export default HomePage;
