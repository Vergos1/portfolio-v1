import "./portfolioSection.scss";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import portfolioData from "../../data/staticData/portfolioData.json";
import PageTitle from "../UI/PageTitle/PageTitle.jsx";
import TabMenuButton from "../UI/TabMenuButton/TabMenuButton.jsx";
import PortfolioCard from "../UI/PortfolioCard/PortfolioCard";
import { useTranslation } from "react-i18next";

const animationBlock = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { duration: 0.4 },
	},
};

const PortfolioSection = () => {
	const { t } = useTranslation();
	const tabMenuData = [
		{ id: "all", title: t("portfolio_tabs.all") },
		{ id: "multipage", title: t("portfolio_tabs.multipage") },
		{
			id: "application",
			title: t("portfolio_tabs.application"),
		},
		{ id: "landing", title: t("portfolio_tabs.landing") },
		{ id: "pet-project", title: t("portfolio_tabs.pet-project") },
	];

	const [activeCategory, setActiveCategory] = useState("all");
	const [openMore, setOpenMore] = useState(false);
	const itemsToShow = openMore ? 12 : 6;
	//
	const filteredPortfolio = activeCategory === "all" ? portfolioData : portfolioData.filter((item) => item.category === activeCategory);
	const filteredPortfolioSlice = filteredPortfolio.slice(0, itemsToShow);
	//
	const handleCategoryChange = (category) => {
		setActiveCategory(category);
	};
	//
	useEffect(() => {
		setOpenMore(false);
	}, [activeCategory]);
	//
	return (
		<section className="portfolio" id="portfolio">
			<div className="container container-about-me" id="about-me">
				<PageTitle title="page_title.portfolio_title" subtitle="page_title.portfolio_subtitle" secondClass="portfolio" />
				<motion.div initial="hidden" whileInView="visible" variants={animationBlock} className="portfolio__inner">
					<TabMenuButton data={tabMenuData} activeTab={activeCategory} setActiveTab={handleCategoryChange} />
					{filteredPortfolioSlice.length > 0 ? (
						<>
							<div className="portfolio-card">
								<PortfolioCard data={filteredPortfolioSlice} />
							</div>
							{filteredPortfolio.length > 6 && (
								<button className="portfolio__button-more" onClick={() => setOpenMore(!openMore)}>
									{openMore ? t("portfolio_card.close_more") : t("portfolio_card.view_more")}
								</button>
							)}
						</>
					) : (
						<div className="portfolio__empty item-dark">
							<p>
								{t("portfolio_card.empty")} {":("}
							</p>
						</div>
					)}
				</motion.div>
			</div>
		</section>
	);
};

export default PortfolioSection;
