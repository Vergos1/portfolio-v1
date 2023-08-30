import React from "react";
import MainLogo from "../UI/MainLogo/MainLogo";
import NavLinkCustom from "../navLinkCustom/NavLinkCustom";
import "./appFooter.scss";

const AppFooter = () => {
  return (
    <footer className="footer">
      <div className="container container-footer">
        <MainLogo />
        <NavLinkCustom />
      </div>
    </footer>
  );
};

export default AppFooter;
