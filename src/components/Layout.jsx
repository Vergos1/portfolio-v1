import "../styles/variables.scss";
import React from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "./appHeader/AppHeader.jsx";
import AppFooter from "./appFooter/AppFooter.jsx";
import NavMenuMobile from "@/components/UI/navMenuMobile/NavMenuMobile.jsx";

const Layout = () => {
	return (
		<>
			<AppHeader />
			<main className="main">
				<Outlet />
				<NavMenuMobile />
			</main>
			<AppFooter />
		</>
	);
};

export default Layout;
