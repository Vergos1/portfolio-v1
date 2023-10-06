import "./skillsTab.scss";
import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as SkillsImg } from "../../../../assets/icon/skills-code-icon.svg";

const animationBlock = {
	hidden: {
		opacity: 0,
	},
	visible: (custom: number) => ({
		opacity: 1,
		transition: { delay: custom * 0.15 },
	}),
};
const SkillsTab: React.FC = () => {
	return (
		<motion.div initial="hidden" whileInView="visible" className="skills-tab">
			<div className="skills-tab__inner">
				<motion.div
					variants={animationBlock}
					custom={1}
					className="skills-tab__item item-charcoal"
				>
					<SkillsImg className="skills-tab__item-img" />
					<span className="skills-tab__item-count">01</span>
					<h6 className="skills-tab__item-title">Розробка та збірка</h6>
					<ul className="skills-tab__item-list">
						<li className="skills-tab__list-item">AJAX</li>
						<li className="skills-tab__list-item">Vite</li>
						<li className="skills-tab__list-item">Gulp</li>
						<li className="skills-tab__list-item">Webpack</li>
						<li className="skills-tab__list-item">npm/Yarn</li>
					</ul>
				</motion.div>
				<motion.div
					variants={animationBlock}
					custom={2}
					className="skills-tab__item item-charcoal"
				>
					<SkillsImg className="skills-tab__item-img" />
					<span className="skills-tab__item-count">02</span>
					<h6 className="skills-tab__item-title">Фронтенд розробка</h6>
					<ul className="skills-tab__item-list">
						<li className="skills-tab__list-item">HTML, CSS, JavaScript</li>
						<li className="skills-tab__list-item">React.js</li>
						<li className="skills-tab__list-item">Typescript</li>
						<li className="skills-tab__list-item">ModuleCSS</li>
						<li className="skills-tab__list-item">StyledComponents</li>
						<li className="skills-tab__list-item">Sass/Scss</li>
						<li className="skills-tab__list-item">Адаптивна верстка</li>
						<li className="skills-tab__list-item">Кросбраузерна верстка</li>
					</ul>
				</motion.div>
				<motion.div
					variants={animationBlock}
					custom={3}
					className="skills-tab__item item-charcoal"
				>
					<SkillsImg className="skills-tab__item-img" />
					<span className="skills-tab__item-count">03</span>
					<h6 className="skills-tab__item-title">Інструменти та сервіси</h6>
					<ul className="skills-tab__item-list">
						<li className="skills-tab__list-item">Git</li>
						<li className="skills-tab__list-item">Jira</li>
						<li className="skills-tab__list-item">Bootstrap</li>
						<li className="skills-tab__list-item">Tailwind</li>
					</ul>
				</motion.div>
				<motion.div
					variants={animationBlock}
					custom={4}
					className="skills-tab__item item-charcoal"
				>
					<SkillsImg className="skills-tab__item-img" />
					<span className="skills-tab__item-count">04</span>
					<h6 className="skills-tab__item-title">Інструменти дизайну</h6>
					<ul className="skills-tab__item-list">
						<li className="skills-tab__list-item">Figma</li>
						<li className="skills-tab__list-item">UI/UX</li>
						<li className="skills-tab__list-item">Photoshop</li>
					</ul>
				</motion.div>
				<motion.div
					variants={animationBlock}
					custom={5}
					className="skills-tab__item item-charcoal"
				>
					<SkillsImg className="skills-tab__item-img" />
					<span className="skills-tab__item-count">05</span>
					<h6 className="skills-tab__item-title">Додаткові навички</h6>
					<ul className="skills-tab__item-list">
						<li className="skills-tab__list-item">BEM методологія</li>
						<li className="skills-tab__list-item">SEO</li>
						<li className="skills-tab__list-item">SPA</li>
						<li className="skills-tab__list-item">MUI Basic</li>
					</ul>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default SkillsTab;
