import "../styles/pages/homePage.scss";
import React from 'react';
import HeroSection from "../components/heroSection/HeroSection";
import AboutMeSection from "../components/aboutMeSection/AboutMeSection";
import SkillsSection from "../components/skillsSection/SkillsSection";
import PortfolioSection from "../components/portfolioSection/PortfolioSection";
import ContactsSection from "../components/contactsSection/ContactsSection";

const HomePage: React.FC = () => {
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
