import "./buttonScrollDown.scss";
import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as ScrollDownButton } from "../../../assets/icon/scrollDown-icon.svg";

const ButtonScrollDown = ({ link }) => {
  const handleScroll = () => {
    const targetElement = document.querySelector(link);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <button className="scroll-down" onClick={handleScroll}>
        <ScrollDownButton />
      </button>
    </>
  );
};

ButtonScrollDown.propTypes = {
  link: PropTypes.string.isRequired,
};

export default ButtonScrollDown;
