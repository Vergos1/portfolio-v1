import "./appHeader.scss";
import React, { useState } from "react";
import i18n from "i18next";
import Cookies from "js-cookie";
import MainLogo from "../UI/MainLogo/MainLogo.jsx";
import NavLinkCustom from "../UI/navLinkCustom/NavLinkCustom.jsx";
import BurgerMenu from "../burgerMenu/BurgerMenu.jsx";
import BurgerMenuIcon from "../../assets/icon/burger-menu-icon.svg";

const AppHeader = () => {
	const [showBurgerMenu, setShowBurgerMenu] = useState(false);

	const toggleBurgerMenu = () => {
		setShowBurgerMenu(!showBurgerMenu);
	};
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		Cookies.set("language", lng);
	};
	return (
		<header className="header">
			<div className="container container-header">
				<MainLogo secondClass="header__logo" />
				<div className="header__nav-pc">
					<NavLinkCustom />
				</div>
				<button className="header__burger-button" type="button" onClick={toggleBurgerMenu}>
					<img src={BurgerMenuIcon} alt="menu" />
				</button>
				{showBurgerMenu && <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} />}
				<div className="header__locales inline-item">
					<button className="header__button" type="button" onClick={() => changeLanguage("ua")}>
						UA
					</button>
					<button className="header__button" type="button" onClick={() => changeLanguage("en")}>
						EN
					</button>
				</div>
			</div>
		</header>
	);
};

export default AppHeader;
