import "./skillsSection.scss";
import React, { useState } from "react";
import PageTitle from "../UI/PageTitle/PageTitle";
import TabMenuButton from "../UI/TabMenuButton/TabMenuButton";
import BlogTab from "../UI/tabContent/BlogTab/BlogTab";
import ButtonScrollDown from "../UI/ButtonScrollDown/ButtonScrollDown";
import SkillsTab from "../UI/tabContent/SkillsTab/SkillsTab";

const SkillsSection = () => {
	const tabMenuData = [
		{
			id: 1,
			title: "блог",
		},
		{
			id: 2,
			title: "стек",
		},
		{
			id: 3,
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
						{activeTab === 1 && <BlogTab />}
						{activeTab === 2 && <SkillsTab />}
						{activeTab === 3 && <div>Контент для опыта</div>}
					</div>
				</div>
			</div>
			<ButtonScrollDown link="#portfolio" />
		</section>
	);
};

export default SkillsSection;
