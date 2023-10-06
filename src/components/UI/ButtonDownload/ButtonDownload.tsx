//todo можно сделать единый вариант для всех кнопок
import React from "react";
import PropTypes from "prop-types";

interface ButtonDownloadProps {
  secondClass: string;
  downloadUrl: string;
  image: React.ReactNode;
}

const ButtonDownload: React.FC<ButtonDownloadProps> = ({ image, secondClass, downloadUrl }) => {
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
  image: PropTypes.element
};

export default ButtonDownload;
