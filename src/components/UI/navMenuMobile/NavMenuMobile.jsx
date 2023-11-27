import style from './NavMenuMobile.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HomeIcon from '../../../assets/icon/home-nav-icon.svg';
import SkillsIcon from '../../../assets/icon/skills-nav-icon.svg';
import AboutMeIcon from '../../../assets/icon/about-nav-icon.svg';
import ContactsIcon from '../../../assets/icon/contacts-nav-icon.svg';
import PortfolioIcon from '../../../assets/icon/portfolio-nav-icon.svg';

const NavMenuMobile = () => {
  const { t } = useTranslation();

  return (
    <div className={style.navMenuMobile}>
      {/*<Link to={"/"} className={style.linkItem}>*/}
      {/*	<img src={HomeIcon} alt="home" />*/}
      {/*	<span>Home</span>*/}
      {/*</Link>*/}
      {/*<Link to={"/"} className={style.linkItem}>*/}
      {/*	<img src={AboutMeIcon} alt="about-me" />*/}
      {/*	<span>Profile</span>*/}
      {/*</Link>*/}
      {/*<Link to={"/"} className={style.linkItem}>*/}
      {/*	<img src={SkillsIcon} alt="skills" />*/}
      {/*	<span>Skills</span>*/}
      {/*</Link>*/}
      {/*<Link to={"/"} className={style.linkItem}>*/}
      {/*	<img src={PortfolioIcon} alt="portfolio" />*/}
      {/*	<span>Portfolio</span>*/}
      {/*</Link>*/}
      {/*<Link to={"/"} className={style.linkItem}>*/}
      {/*	<img src={ContactsIcon} alt="contacts" />*/}
      {/*	<span>Contacts</span>*/}
      {/*</Link>*/}
      <a href="#main" className={style.linkItem}>
        <img src={HomeIcon} alt="home" />
        <span>{t('header.main')}</span>
      </a>
      <a href="#about" className={style.linkItem}>
        <img src={AboutMeIcon} alt="about-me" />
        <span>{t('header.about_me')}</span>
      </a>
      <a href="#skills" className={style.linkItem}>
        <img src={SkillsIcon} alt="skills" />
        <span>{t('header.skills')}</span>
      </a>
      <a href="#portfolio" className={style.linkItem}>
        <img src={PortfolioIcon} alt="portfolio" />
        <span>{t('header.portfolio')}</span>
      </a>
      <a href="#contacts" className={style.linkItem}>
        <img src={ContactsIcon} alt="contacts" />
        <span>{t('header.contacts')}</span>
      </a>
    </div>
  );
};

export default NavMenuMobile;
