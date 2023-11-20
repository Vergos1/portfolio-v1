import styles from "./burgerMenu.module.scss";
import React from "react";

const BurgerMenu = ({ toggleBurgerMenu }) => {
	return (
		<div className={styles.burgerWrapper}>
			<div className={styles.navbar}>
				<a href={"#main"}>Головна</a>
				<a href={"#about-me"}>Інформація</a>
				<a href={"#skills"}>Навички</a>
				<a href={"#portfolio"}>Портфоліо</a>
				<a href={"#contacts"}>Контакти</a>
			</div>
		</div>
	);
};

export default BurgerMenu;