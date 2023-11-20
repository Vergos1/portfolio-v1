//todo сделать надпись про пользовательские права
import "./appFooter.scss";
import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "../UI/MainLogo/MainLogo.jsx";
import NavLinkCustom from "../UI/navLinkCustom/NavLinkCustom.jsx";
import LocationIcon from "../../assets/icon/location-icon.svg";
import MailIcon from "../../assets/icon/mail-icon.svg";
import GithubIcon from "../../assets/icon/github-icon.svg";
import TelegramIcon from "../../assets/icon/telegram-icon.svg";
import LinkedinIcon from "../../assets/icon/linkedin-icon.svg";

const AppFooter = () => {
	return (
		<footer className="footer">
			<div className="container container-footer">
				<div className="footer__content">
					<MainLogo />
					<NavLinkCustom />
					<div className="footer__contacts">
						<Link to={"/"} className="footer__contacts-item">
							<span className="footer__contacts-icon">
								<img src={LocationIcon} alt="location" />
							</span>
							Ukraine, Vinnitsa
						</Link>
						<Link to={"/"} className="footer__contacts-item">
							<span className="footer__contacts-icon">
								<img src={MailIcon} alt="mail" />
							</span>
							legendsmobajl4@gmail.com
						</Link>
					</div>
				</div>

				<div className="footer__social-links">
					<Link className="footer__social-icon" to={"https://github.com/Vergos1"} target={"_blank"}>
						<img src={GithubIcon} alt="github" />
					</Link>
					<Link className="footer__social-icon" to={"https://t.me/yanchuk_1"}>
						<img src={TelegramIcon} alt="telegram" />
					</Link>
					<Link className="footer__social-icon" to={"https://www.linkedin.com/in/ihor-yanchuk-248a64268/"}>
						<img src={LinkedinIcon} alt="linkedin" />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default AppFooter;
