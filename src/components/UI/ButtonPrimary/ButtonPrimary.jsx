import React from "react";
import PropTypes from "prop-types";

const ButtonPrimary = (props) => {
  const { text, secondClass, type } = props;
  return (
    <>
      <button
        className={`${secondClass} btn-reset button-primary `}
        type={type}
      >
        {text}
      </button>
    </>
  );
};
ButtonPrimary.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  secondClass: PropTypes.string.isRequired,
};

export default ButtonPrimary;
