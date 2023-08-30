import "./aboutMeSection.scss";
import SwiperCustom from "../UI/SwiperCustom/SwiperCustom";
import React from "react";
import PageTitle from "../UI/PageTitle/PageTitle";

const AboutMeSection = () => {
  return (
    <section className="about-me">
      <div className="container container-about-me" id="about-me">
        <PageTitle
          title="про мене"
          subtitle="коротко про мене та мої принципи"
          secondClass="about-me"
        />
        <div className="about-me__inner">
          <SwiperCustom />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
