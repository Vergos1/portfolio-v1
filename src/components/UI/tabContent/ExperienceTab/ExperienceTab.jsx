import "./experienceTab.scss";
import React from "react";
import ListTreeCustom from "../../ListTreeCustom/ListTreeCustom";

const ExperienceTab = () => {
	const treeData = [
		{
			id: 1,
			label: "Языки программирования и разметки",
			children: [
				{
					id: 1,
					label: "HTML",
				},
				{
					id: 2,
					label: "CSS",
				},
				{
					id: 3,
					label: "JavaScript",
				},
			],
		},
		{
			id: 2,
			label: "Фреймворки и библиотеки",
			children: [
				{
					id: 1,
					label: "Подузел 1.1",
				},
				{
					id: 2,
					label: "Подузел 1.2",
				},
			],
		},
		{
			id: 3,
			label: "Верстка  и дизайн",
			children: [
				{
					id: 1,
					label: "Подузел 1.1",
				},
				{
					id: 2,
					label: "Подузел 1.2",
				},
			],
		},
		{
			id: 4,
			label: "Взаимодействие с сервером",
			children: [
				{
					id: 1,
					label: "Подузел 1.1",
				},
				{
					id: 2,
					label: "Подузел 1.2",
				},
			],
		},
		{
			id: 5,
			label: "Архитектура и разработка",
			children: [
				{
					id: 1,
					label: "Подузел 1.1",
				},
				{
					id: 2,
					label: "Подузел 1.2",
				},
			],
		},
		{
			id: 6,
			label: "Дополнительные навыки",
			children: [
				{
					id: 1,
					label: "Подузел 1.1",
				},
				{
					id: 2,
					label: "Подузел 1.2",
				},
			],
		},
	];
	return (
		<div className="experience-tab item-dark">
			<ListTreeCustom data={treeData} />
		</div>
	);
};

export default ExperienceTab;
