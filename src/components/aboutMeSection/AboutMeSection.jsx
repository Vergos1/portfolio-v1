import React from "react";
import "./aboutMeSection.scss";
import SwiperCustom from "../SwiperCustom/SwiperCustom.jsx";
import PageTitle from "../UI/PageTitle/PageTitle.jsx";

const AboutMeSection = () => {
	return (
		<section className="about-me">
			<div className="container container-about-me" id="about-me">
				<PageTitle title="page_title.about_me_title" subtitle="page_title.about_me_subtitle" secondClass="about-me" />
				<div className="about-me__inner">
					<SwiperCustom />
				</div>
			</div>
		</section>
	);
};

export default AboutMeSection;
