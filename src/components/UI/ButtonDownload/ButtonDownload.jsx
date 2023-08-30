import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonDownload = (props) => {
  const { image, secondClass, downloadUrl } = props;
  return (
    <>
      <a
        className={`${secondClass} btn-reset button-download`}
        href={downloadUrl}
        download
      >
        {image}
      </a>
    </>
  );
};
ButtonDownload.propTypes = {
  secondClass: PropTypes.string.isRequired,
  downloadUrl: PropTypes.string.isRequired,
  image: PropTypes.element,
};

export default ButtonDownload;
