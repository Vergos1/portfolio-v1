import "./heroSection.scss";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactComponent as CssIcon } from "../../assets/icon/css-animation.svg";
import { ReactComponent as HtmlIcon } from "../../assets/icon/html-animation.svg";
import { ReactComponent as JsIcon } from "../../assets/icon/js-animation.svg";
import { ReactComponent as TsIcon } from "../../assets/icon/ts-animation.svg";
import { ReactComponent as PhpIcon } from "../../assets/icon/php-animation.svg";
import { ReactComponent as DownloadIcon } from "../../assets/icon/download-icon.svg";
import ButtonDownload from "../UI/ButtonDownload/ButtonDownload";

const animationText = {
	hidden: {
		x: 1000,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.4 },
	}),
};

const HeroSection: React.FC = () => {
	return (
		<section className="hero">
			<motion.div
				initial={{ scale: 0 }}
				animate={{ rotate: 360, scale: 1 }}
				transition={{
					type: "spring",
					stiffness: 260,
					damping: 20,
				}}
				viewport={{ once: true }}
				className="container container-hero"
			>
                <div className="hero__animation-item">
                    <CssIcon className="hero__animation-figure1" />
                    <HtmlIcon className="hero__animation-figure2" />
                    <JsIcon className="hero__animation-figure3" />
                    <TsIcon className="hero__animation-figure4" />
                    <PhpIcon className="hero__animation-figure5" />
                </div>
			
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="hero__inner"
				>
					<div className="hero__item">
						<motion.p
							variants={animationText}
							custom={1}
							className="hero__animation-text"
						>
							console.log(“hello!!!”)
						</motion.p>
						<motion.h1
							variants={animationText}
							custom={2}
							className="hero__title"
						>
							мене звати ігор <br /> я -{" "}
							<span className="hero__title_neon">frontend developer</span>
						</motion.h1>
						<motion.p
							variants={animationText}
							custom={3}
							className="hero__description"
						>
							Я займаюсь <span className="selection">front-end</span> розробкою.
							Якщо вам потрібен дизайн сайту, макет або навіть готовий сайт під
							ключ, ви можете{" "}
							<Link to={"#contact"} className="selection-link">
								{"зв'язатися зі мною"}
							</Link>
							. Мій багаторічне досвід у розробці інтерактивних та привабливих
							веб-сайтів гарантує професійний підхід до вашого проекту
						</motion.p>
						<motion.div
							variants={animationText}
							custom={4}
							className="hero__download-item inline-item"
						>
							<p className="hero__download-text">ви можете скачати моє CV:</p>
							<ButtonDownload
								secondClass="hero__download-cv"
								downloadUrl="../../../public/cv.pdf"
								image={<DownloadIcon />}
							/>
						</motion.div>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default HeroSection;
