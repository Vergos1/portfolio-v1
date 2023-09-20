import "./heroSection.scss";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CssIcon } from "../../assets/icon/css-animation.svg";
import { ReactComponent as HtmlIcon } from "../../assets/icon/html-animation.svg";
import { ReactComponent as JsIcon } from "../../assets/icon/js-animation.svg";
import { ReactComponent as TsIcon } from "../../assets/icon/ts-animation.svg";
import { ReactComponent as PhpIcon } from "../../assets/icon/php-animation.svg";
import { ReactComponent as DownloadIcon } from "../../assets/icon/download-icon.svg";
import ButtonScrollDown from "../UI/ButtonScrollDown/ButtonScrollDown";
import ButtonDownload from "../UI/ButtonDownload/ButtonDownload";

const HeroSection = () => {
	return (
		<section className="hero">
			<div className="container container-hero">
				<CssIcon className="hero__animation-figure1" />
				<HtmlIcon className="hero__animation-figure2" />
				<JsIcon className="hero__animation-figure3" />
				<TsIcon className="hero__animation-figure4" />
				<PhpIcon className="hero__animation-figure5" />
				<div className="hero__inner">
					<div className="hero__item">
						{/*// ! ANIMATED TEXT DONT DELETE -- <p className="hero__animation-text">console.log(“hello!!!”)</p> */}
						<h1 className="hero__title">
							мене звати ігор <br /> я -{" "}
							<span className="hero__title_neon">frontend developer</span>
						</h1>
						<p className="description-normal">
							Я займаюсь <span className="selection">front-end</span> розробкою.
							Якщо вам потрібен дизайн сайту, макет або навіть готовий сайт під
							ключ, ви можете{" "}
							<Link to={"#contact"} className="selection-link">
								{"зв'язатися зі мною"}
							</Link>
							. Мій багаторічне досвід у розробці інтерактивних та привабливих
							веб-сайтів гарантує професійний підхід до вашого проекту
						</p>
						<div className="hero__download-item inline-item">
							<p className="description-tooltip">ви можете скачати моє CV:</p>
							<ButtonDownload
								secondClass="hero__download-cv"
								downloadUrl="../../../public/cv.pdf"
								image={<DownloadIcon />}
							/>
						</div>
					</div>
				</div>
			</div>
			<ButtonScrollDown link="#about-me" />
		</section>
	);
};

export default HeroSection;
