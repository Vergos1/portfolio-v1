import "./PortfolioCard.scss";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { ReactComponent as CategoryIcon } from "../../../assets/icon/category-icon.svg";
import { ReactComponent as DateIcon } from "../../../assets/icon/date-icon.svg";
import { ReactComponent as LinkIcon } from "../../../assets/icon/hover-link-icon.svg";

const animationBlock = {
	hidden: {
		opacity: 0,
	},
	visible: (custom) => ({
		opacity: 1,
		transition: { delay: custom * 0.05 },
	}),
};

const PortfolioCard = ({ data }) => {
	return (
		<>
			{data.map((item) => (
				<motion.div
					initial="hidden"
					whileInView="visible"
					variants={animationBlock}
					custom={item.id}
					viewport={{ amount: 0, once: true }}
					className="portfolio-card__item item-dark"
					key={item.id}
				>
					<div className="portfolio-card__item-header">
						<div className="portfolio-card__item-content">
							<img
								src={item.image}
								alt="image"
								className="portfolio-card__item-image"
							/>
							<span className="portfolio-card__item-figure"></span>
							<Link to="/link" className="portfolio-card__item-hover">
								<LinkIcon />
							</Link>
						</div>

						<h5>{item.title}</h5>
					</div>
					<div className="portfolio-card__item-text">
						<p className="portfolio-card__item-description description-normal">
							{item.description}
						</p>
						<p className="portfolio-card__item-tag">{item.technologies}</p>
					</div>

					<div className="portfolio-card__item-footer">
						<div className="portfolio-card__item-category">
							<CategoryIcon />
							<p className="portfolio-card__footer-description">
								{item.categoryName}
							</p>
						</div>
						<div className="portfolio-card__item-date">
							<DateIcon />
							<p className="portfolio-card__footer-description">{item.date}</p>
						</div>
					</div>
				</motion.div>
			))}
		</>
	);
};
PortfolioCard.proptypes = {
	data: PropTypes.array.isRequired,
};

export default PortfolioCard;
