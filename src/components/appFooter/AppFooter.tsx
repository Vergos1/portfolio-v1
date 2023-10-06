//todo сделать надпись про пользовательские права

import "./appFooter.scss";
import { Link } from "react-router-dom";
import MainLogo from "../UI/MainLogo/MainLogo";
import NavLinkCustom from "../UI/navLinkCustom/NavLinkCustom";
import { ReactComponent as LocationIcon } from "@/assets/icon/location-icon.svg";
import { ReactComponent as MailIcon } from "@/assets/icon/mail-icon.svg";
import { ReactComponent as GithubIcon } from "@/assets/icon/github-icon.svg";
import { ReactComponent as TelegramIcon } from "@/assets/icon/telegram-icon.svg";
import { ReactComponent as LinkedinIcon } from "@/assets/icon/linkedin-icon.svg";



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
								<LocationIcon />
							</span>
              Ukraine Vinnitsa
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
          <Link className="footer__social-icon" to={"https://github.com/Vergos1"} target={"_blank"}>
            <GithubIcon />
          </Link>
          <Link className="footer__social-icon" to={"https://t.me/yanchuk_1"}>
            <TelegramIcon />
          </Link>
          <Link className="footer__social-icon" to={"https://www.linkedin.com/in/ihor-yanchuk-248a64268/"}>
            <LinkedinIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
