import "./skillsSection.scss";
import React, { useState } from "react";
import PageTitle from "../UI/PageTitle/PageTitle";
import TabMenuButton from "../UI/TabMenuButton/TabMenuButton";
import ButtonScrollDown from "../UI/ButtonScrollDown/ButtonScrollDown";
import SkillsTab from "../UI/tabContent/SkillsTab/SkillsTab";
import ExperienceTab from "../UI/tabContent/ExperienceTab/ExperienceTab";

const SkillsSection = () => {
	const tabMenuData = [
		{
			id: 1,
			title: "стек",
		},
		{
			id: 2,
			title: "досвід",
		},
	];
	const [activeTab, setActiveTab] = useState(tabMenuData[0].id);
	return (
		<section className="skills">
			<div className="container container-skills" id="skills">
				<PageTitle
					title="навички"
					subtitle="коротко про мої навички"
					secondClass="skills"
				/>
				<div className="skills__inner">
					<TabMenuButton
						data={tabMenuData}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					<div className="skills__tab">
						{activeTab === 1 && <ExperienceTab />}
						{activeTab === 2 && <SkillsTab />}
					</div>
				</div>
			</div>
			<ButtonScrollDown link="#portfolio" />
		</section>
	);
};

export default SkillsSection;
