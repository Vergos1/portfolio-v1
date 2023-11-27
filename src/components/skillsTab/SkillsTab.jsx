import "./skillsTab.scss";
import React from "react";
import { motion } from "framer-motion";
import SkillsImg from "../../assets/icon/skills-code-icon.svg";
import { useTranslation } from "react-i18next";

const SkillsTab = () => {
	const animationBlock = {
		hidden: {
			opacity: 0,
		},
		visible: (custom) => ({
			opacity: 1,
			transition: { duration: 0.8, type: "tween" },
		}),
	};
	const { t } = useTranslation();

	return (
		<motion.div initial="hidden" whileInView="visible" className="skills-tab">
			<div className="skills-tab__inner">
				<motion.div variants={animationBlock} custom={1} className="skills-tab__item item-charcoal">
					<img className="skills-tab__item-img" src={SkillsImg} alt="skills" />
					<span className="skills-tab__item-count">01</span>
					<h6 className="skills-tab__item-title">{t("stack_tab.title_1")}</h6>
					<ul className="skills-tab__item-list">
						<li className="skills-tab__list-item">{t("stack_tab.technology_1")}</li>
						<li className="skills-tab__list-item">{t("stack_tab.technology_2")}</li>
						<li className="skills-tab__list-item">{t("stack_tab.technology_3")}</li>
						<li className="skills-tab__list-item">{t("stack_tab.technology_4")}</li>
					</ul>
				</motion.div>
				<motion.div variants={animationBlock} custom={2} className="skills-tab__item item-charcoal">
					<img className="skills-tab__item-img" src={SkillsImg} alt="skills" />
					<span className="skills-tab__item-count">02</span>
					<h6 className="skills-tab__item-title">{t("stack_tab.title_2")}</h6>
					<ul className="skills-tab__item-list">
						<li className="skills-tab__list-item">{t("stack_tab.technology_5")}</li>
						<li className="skills-tab__list-item">{t("stack_tab.technology_6")}</li>
						<li className="skills-tab__list-item">{t("stack_tab.technology_7")}</li>
						<li className="skills-tab__list-item">{t("stack_tab.technology_9")}</li>
						<li className="skills-tab__list-item">{t("stack_tab.technology_11")}</li>
						<li className="skills-tab__list-item">{t("stack_tab.technology_12")}</li>
						<li className="skills-tab__list-item">{t("stack_tab.technology_13")}</li>
					</ul>
				</motion.div>
				<motion.div variants={animationBlock} custom={3} className="skills-tab__item item-charcoal">
					<img className="skills-tab__item-img" src={SkillsImg} alt="skills" />
					<span className="skills-tab__item-count">03</span>
					<h6 className="skills-tab__item-title">{t("stack_tab.title_3")}</h6>
					<ul className="skills-tab__item-list">
						<li className="skills-tab__list-item">{t("stack_tab.technology_14")}</li>
						<li className="skills-tab__list-item">{t("stack_tab.technology_15")}</li>
						<li className="skills-tab__list-item">{t("stack_tab.technology_16")}</li>
						<li className="skills-tab__list-item">{t("stack_tab.technology_17")}</li>
					</ul>
				</motion.div>
				<motion.div variants={animationBlock} custom={4} className="skills-tab__item item-charcoal">
					<img className="skills-tab__item-img" src={SkillsImg} alt="skills" />
					<span className="skills-tab__item-count">04</span>
					<h6 className="skills-tab__item-title">{t("stack_tab.title_4")}</h6>
					<ul className="skills-tab__item-list">
						<li className="skills-tab__list-item">{t("stack_tab.technology_18")}</li>
						<li className="skills-tab__list-item">{t("stack_tab.technology_19")}</li>
						<li className="skills-tab__list-item">{t("stack_tab.technology_20")}</li>
					</ul>
				</motion.div>
				<motion.div variants={animationBlock} custom={5} className="skills-tab__item item-charcoal">
					<img className="skills-tab__item-img" src={SkillsImg} alt="skills" />
					<span className="skills-tab__item-count">05</span>
					<h6 className="skills-tab__item-title">{t("stack_tab.title_5")}</h6>
					<ul className="skills-tab__item-list">
						<li className="skills-tab__list-item">{t("stack_tab.technology_21")}</li>
						<li className="skills-tab__list-item">{t("stack_tab.technology_22")}</li>
						<li className="skills-tab__list-item">{t("stack_tab.technology_23")}</li>
						<li className="skills-tab__list-item">{t("stack_tab.technology_24")}</li>
					</ul>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default SkillsTab;
