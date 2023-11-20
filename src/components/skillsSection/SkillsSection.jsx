import "./skillsSection.scss";
import React, { useState } from "react";
import { motion } from "framer-motion";
import PageTitle from "../UI/PageTitle/PageTitle.jsx";
import TabMenuButton from "../UI/TabMenuButton/TabMenuButton.jsx";
import ExperienceTab from "../ExperienceTab/ExperienceTab.jsx";
import SkillsTab from "../SkillsTab/SkillsTab.jsx";
import { useTranslation } from "react-i18next";

const animationBlock = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { duration: 0.2 },
	},
};

const SkillsSection = () => {
	const { t } = useTranslation();
	const tabMenuData = [
		{
			id: 1,
			title: t("skills_tabs.stack"),
		},
		{
			id: 2,
			title: t("skills_tabs.experience"),
		},
	];

	const [activeTab, setActiveTab] = useState(tabMenuData[0].id);

	return (
		<section className="skills">
			<div className="container container-skills" id="skills">
				<PageTitle title="page_title.skills_title" subtitle="page_title.skills_subtitle" secondClass="skills" />
				<motion.div initial="hidden" whileInView="visible" variants={animationBlock} className="skills__inner">
					<TabMenuButton data={tabMenuData} activeTab={activeTab} setActiveTab={setActiveTab} />
					<motion.div className="skills__tab">
						{activeTab === 1 && <SkillsTab />}
						{activeTab === 2 && <ExperienceTab />}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default SkillsSection;
