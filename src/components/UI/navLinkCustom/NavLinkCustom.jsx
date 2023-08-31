/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "./navLinkCustom.scss";

const NavLinkCustom = () => {
  const navLinkData = [
    {
      id: 1,
      title: "головна",
      url: "#main",
    },
    {
      id: 2,
      title: "про мене",
      url: "#about-me",
    },
    {
      id: 3,
      title: "навички",
      url: "#skills",
    },
    {
      id: 4,
      title: "портфоліо",
      url: "#portfolio",
    },
    {
      id: 5,
      title: "для замовників",
      url: "#for-customers",
    },
    {
      id: 6,
      title: "контакти",
      url: "#contacts",
    },
  ];
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
