import "../../styles/style.scss";
import React, { lazy, useEffect, useState } from "react";
import Layout from "../Layout.jsx";
import Preloader from "../UI/Preloader/Preloader.jsx";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("../../pages/HomePage.jsx"));

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	//note loader timer
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	//note loader remove and animation

	return (
		<>
			{isLoading && (
				<div className={`preloader-container ${isLoading ? "" : "fadeOut"}`}>
					<Preloader />
				</div>
			)}
			{!isLoading && (
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePage />}></Route>
					</Route>
				</Routes>
			)}
		</>
	);
};

export default App;
