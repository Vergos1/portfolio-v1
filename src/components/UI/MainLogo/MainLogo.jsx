import "../../../styles/ui/mainLogo.scss";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/icon/main-logo.svg";

const MainLogo = () => {
	return (
		<>
			<Link to={"/"}>
				<Logo alt="main logo" className="main-logo" />
			</Link>
			{/* this is the main logo, it is used in the header and footer of my portfolio */}
		</>
	);
};

export default MainLogo;
