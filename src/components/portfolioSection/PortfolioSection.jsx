import "./portfolioSection.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import portfolioData from "../../data/staticData/portfolioData";
import PageTitle from "../UI/PageTitle/PageTitle";
import TabMenuButton from "../UI/TabMenuButton/TabMenuButton";
import { ReactComponent as CategoryIcon } from "../../assets/icon/category-icon.svg";
import { ReactComponent as DateIcon } from "../../assets/icon/date-icon.svg";
import { ReactComponent as LinkIcon } from "../../assets/icon/hover-link-icon.svg";

const PortfolioSection = () => {
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
	const [activeCategory, setActiveCategory] = useState("all");

	const handleCategoryChange = (category) => {
		setActiveCategory(category);
	};
	const filteredPortfolio =
		activeCategory === "all"
			? portfolioData
			: portfolioData.filter((item) => item.category === activeCategory);
	// const [activeTab, setActiveTab] = useState(tabMenuData[0].id);
	const filteredPortfolioSlice = filteredPortfolio.slice(0, 6);
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
						<div className="portfolio__items">
							{filteredPortfolioSlice.map((item) => (
								<div className="portfolio__item item-dark" key={item.id}>
									<div className="portfolio__item-header">
										<div className="portfolio__item-content">
											<img
												src={item.image}
												alt="image"
												className="portfolio__item-image"
											/>
											<Link to="/link" className="portfolio__item-hover">
												<LinkIcon />
											</Link>
										</div>

										<h6 className="portfolio__item-title">{item.title}</h6>
									</div>
									<div className="portfolio__item-text">
										<p className="portfolio__item-description description-normal">
											{item.description}
										</p>
										<p className="portfolio__item-tag">{item.technologies}</p>
									</div>

									<div className="portfolio__item-footer">
										<div className="portfolio__item-category">
											<CategoryIcon />
											<p className="portfolio__footer-description">
												{item.categoryName}
											</p>
										</div>
										<div className="portfolio__item-date">
											<DateIcon />
											<p className="portfolio__footer-description">
												{item.date}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					) : (
						<div className="portfolio__empty item-dark">
							<p>В цьому розділі нічого немає :(</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default PortfolioSection;
