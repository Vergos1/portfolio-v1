import Hero from "../components/hero/Hero.jsx";
import AboutSlider from "../components/aboutSlider/AboutSlider.jsx";
import Skills from "../components/skills/Skills.jsx";
import Portfolio from "../components/portfolio/Portfolio.jsx";
import Contacts from "../components/contacts/Contacts.jsx";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSlider />
      <Skills />
      <Portfolio />
      <Contacts />
    </>
  );
};

export default HomePage;
