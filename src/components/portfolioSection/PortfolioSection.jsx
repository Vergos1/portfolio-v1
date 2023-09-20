import "./portfolioSection.scss";
import React, { useEffect, useState } from "react";
import portfolioData from "../../data/staticData/portfolioData";
import PageTitle from "../UI/PageTitle/PageTitle";
import TabMenuButton from "../UI/TabMenuButton/TabMenuButton";
import PortfolioCard from "../UI/PortfolioCard/PortfolioCard";

const tabMenuData = [
	{ id: "all", title: "Все" },
	{ id: "multipage", title: "Многостраничники" },
	{
		id: "application",
		title: "додатки",
	},
	{ id: "landing", title: "Лендинги" },
	{ id: "petproject", title: "Пет-проекти" },
];

const PortfolioSection = () => {
	const [activeCategory, setActiveCategory] = useState("all");
	const [openMore, setOpenMore] = useState(false);
	const itemsToShow = openMore ? 12 : 6;
	//
	const filteredPortfolio =
		activeCategory === "all"
			? portfolioData
			: portfolioData.filter(
					(item) => item.category === activeCategory,
			  );
	const filteredPortfolioSlice = filteredPortfolio.slice(0, itemsToShow);
	//
	const handleCategoryChange = (category) => {
		// setOpenMore(false);
		setActiveCategory(category);
	};
	//
	useEffect(() => {
		setOpenMore(false);
	}, [activeCategory]);
	//
	return (
		<section className="portfolio">
			<div className="container container-about-me" id="about-me">
				<PageTitle
					title="портфоліо"
					subtitle="мої роботи та проекти"
					secondClass="portfolio"
				/>
				<div className="portfolio__inner">
					<TabMenuButton
						data={tabMenuData}
						activeTab={activeCategory}
						setActiveTab={handleCategoryChange}
					/>
					{filteredPortfolioSlice.length > 0 ? (
						<>
							<div className="portfolio-card">
								<PortfolioCard
									data={filteredPortfolioSlice}
								/>
							</div>
							{filteredPortfolio.length > 6 && (
								<button
									className="portfolio__button-more"
									onClick={() =>
										setOpenMore(!openMore)
									}
								>
									{openMore
										? "закрити"
										: "переглянути більше"}
								</button>
							)}
						</>
					) : (
						<div className="portfolio__empty item-dark">
							<p>В цьому розділі нічого немає {":("}</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default PortfolioSection;
