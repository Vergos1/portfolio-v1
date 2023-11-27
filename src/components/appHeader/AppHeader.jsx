import './appHeader.scss';
import { useEffect, useState } from 'react';
import i18n from 'i18next';
import Cookies from 'js-cookie';
import { customSelectStyles } from '@/helper/MantineStyle/MantineStyle.jsx';
import { Select } from '@mantine/core';
import MainLogo from '../UI/MainLogo/MainLogo.jsx';
import NavLinkCustom from '../UI/navLinkCustom/NavLinkCustom.jsx';
import BurgerMenu from '../burgerMenu/BurgerMenu.jsx';
import BurgerMenuIcon from '../../assets/icon/burger-menu-icon.svg';
import SelectArrowIcon from '../../assets/icon/select-arrow.svg?react';

const AppHeader = () => {
  const [value, setValue] = useState('EN');
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  useEffect(() => {
    const savedLanguage = Cookies.get('language') || 'EN';
    setValue(savedLanguage.toUpperCase()); // Убедитесь, что значение всегда в верхнем регистре
    i18n.changeLanguage(savedLanguage);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    Cookies.set('language', lang);
    setValue(lang.toUpperCase());
  };
  const toggleBurgerMenu = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  return (
    <header className="header">
      <div className="container container-header">
        <MainLogo secondClass="header__logo" />
        <div className="header__nav-pc">
          <NavLinkCustom />
        </div>
        <button
          className="header__burger-button"
          type="button"
          onClick={toggleBurgerMenu}
        >
          <img src={BurgerMenuIcon} alt="menu" />
        </button>
        {showBurgerMenu && <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} />}
        <div className="header__locales">
          <Select
            size="s"
            styles={customSelectStyles}
            data={['EN', 'UA']}
            value={value}
            rightSection={<SelectArrowIcon />}
            onChange={(value) => changeLanguage(value.toLowerCase())}
          />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
