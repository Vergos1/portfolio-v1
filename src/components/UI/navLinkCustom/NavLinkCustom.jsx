import "./navLinkCustom.scss";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavLinkCustom = () => {
	const { t } = useTranslation();
	const navLinkData = [
		{
			id: 1,
			title: `${t("header.main")}`,
			url: "#main",
		},
		{
			id: 2,
			title: `${t("header.about_me")}`,
			url: "#about-me",
		},
		{
			id: 3,
			title: `${t("header.skills")}`,
			url: "#skills",
		},
		{
			id: 4,
			title: `${t("header.portfolio")}`,
			url: "#portfolio",
		},
		{
			id: 5,
			title: `${t("header.contacts")}`,
			url: "#contacts",
		},
	];
	return (
		<nav className="navbar">
			<ul className="navbar__items list-reset">
				{navLinkData.map((item) => (
					<li key={item.id} className="navbar__item hover-link">
						<a href={item.url} className="navbar__link ">
							{item.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavLinkCustom;
