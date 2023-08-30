/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import navLinkData from "../../data/staticData/navLinkData";
import "./navLinkCustom.scss";

const NavLinkCustom = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__items list-reset">
        {navLinkData.map((item) => (
          <li key={item.id} className="navbar__item hover-link">
            <Link to={item.url} className="navbar__link ">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinkCustom;
