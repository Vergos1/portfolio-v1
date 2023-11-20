import "./experienceTab.scss";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DevavenuaLogo from "../../assets/icon/devavenua-logo.svg";
import SwetrixLogo from "../../assets/icon/swetrix-logo.svg";
import { useTranslation } from "react-i18next";

const animationBlock = {
	hidden: {
		opacity: 0,
	},
	visible: (custom) => ({
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};
const ExperienceTab = () => {
	const { t } = useTranslation();
	return (
		<motion.div initial="hidden" whileInView="visible" className="experience-tab">
			<motion.h4 variants={animationBlock} custom={0} className="experience-tab__title">
				{t("experience_tab.title1")} <br />
				<span className="selected">{t("experience_tab.title2")}</span>
				<br />
				{t("experience_tab.title3")}
			</motion.h4>
			<motion.div initial="hidden" whileInView="visible" className="experience-tab__items">
				<motion.div variants={animationBlock} custom={1} className="experience-tab__item item-charcoal">
					<div className="experience-tab__header">
						<div className="experience-tab__header-item">
							<img src={DevavenuaLogo} alt="devavenua" />
							<h4 className="experience-tab__company-name">devavenua</h4>
						</div>
						<p className="experience-tab__experience selected">6 {t("experience_tab.month")}</p>
					</div>
					<div className="experience-tab__content">
						<p className="description-normal">{t("experience_tab.description_1")}</p>
					</div>
					<div className="experience-tab__footer">
						<p className="experience-tab__contacts-title">{t("experience_tab.contacts")}:</p>
						<div className="experience-tab__links">
							<Link to={"/"} className="selection-link">
								{t("experience_tab.website")}
							</Link>
							<Link to={"/"} className="selection-link">
								{t("experience_tab.social")}
							</Link>
						</div>
					</div>
				</motion.div>
				<motion.div variants={animationBlock} custom={2} className="experience-tab__item item-charcoal">
					<div className="experience-tab__header">
						<div className="experience-tab__header-item">
							<img src={SwetrixLogo} alt="swertix" />
							<h4 className="experience-tab__company-name">swetrix</h4>
						</div>
						<p className="experience-tab__experience selected">9 {t("experience_tab.month")}</p>
					</div>
					<div className="experience-tab__content">
						<p className="description-normal">{t("experience_tab.description_2")}</p>
					</div>
					<div className="experience-tab__footer">
						<p className="experience-tab__contacts-title">{t("experience_tab.contacts")}:</p>
						<div className="experience-tab__links">
							<Link to={"/"} className="selection-link">
								{t("experience_tab.website")}
							</Link>
							<Link to={"/"} className="selection-link">
								{t("experience_tab.social")}
							</Link>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default ExperienceTab;
