import "../../../styles/ui/mainLogo.scss";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/icon/main-logo.svg";

const MainLogo = ({ secondClass }) => {
  return (
    <>
      <Link className={secondClass} to={"/"}>
        <img src={Logo} alt="logo" className="main-logo" />
      </Link>
    </>
  );
};

export default MainLogo;
