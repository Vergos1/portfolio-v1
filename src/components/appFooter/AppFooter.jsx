import "./appFooter.scss";
import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "../UI/MainLogo/MainLogo";
import NavLinkCustom from "../UI/navLinkCustom/NavLinkCustom";
import { ReactComponent as LocationIcon } from "../../assets/icon/location-icon.svg";
import { ReactComponent as MailIcon } from "../../assets/icon/mail-icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/icon/github-icon.svg";
import { ReactComponent as DiscordIcon } from "../../assets/icon/discord-icon.svg";
import { ReactComponent as TelegramIcon } from "../../assets/icon/telegram-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icon/linkedin-icon.svg";
const AppFooter = () => {
	return (
		<footer className="footer">
			<div className="container container-footer">
				<div>
					<MainLogo />
					<NavLinkCustom />
					<div className="footer__contacts">
						<Link to={"/"} className="footer__contacts-item">
							<span className="footer__contacts-icon">
								<LocationIcon />
							</span>
							Ukraine vinnitsa
						</Link>
						<Link to={"/"} className="footer__contacts-item">
							<span className="footer__contacts-icon">
								<MailIcon />
							</span>
							legendsmobajl4@gmail.com
						</Link>
					</div>
				</div>

				<div className="footer__social-links">
					<Link className="footer__social-icon">
						<GithubIcon />
					</Link>
					<Link className="footer__social-icon">
						<DiscordIcon />
					</Link>
					<Link className="footer__social-icon">
						<TelegramIcon />
					</Link>
					<Link className="footer__social-icon">
						<LinkedinIcon />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default AppFooter;
