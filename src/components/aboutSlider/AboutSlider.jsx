import React from 'react';
import './aboutSlider.scss';
import SwiperCustom from '../swiperCustom/SwiperCustom.jsx';
import PageTitle from '../UI/PageTitle/PageTitle.jsx';

const AboutSlider = () => {
  return (
    <section className="about-me">
      <div className="container container-about-me" id="about">
        <PageTitle
          title="page_title.about_me_title"
          subtitle="page_title.about_me_subtitle"
          secondClass="about-me"
        />
        <div className="about-me__inner">
          <SwiperCustom />
        </div>
      </div>
    </section>
  );
};

export default AboutSlider;
