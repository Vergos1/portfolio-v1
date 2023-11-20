import React from "react";
import PropTypes from "prop-types";

const ButtonDownload = ({ image, secondClass, downloadUrl }) => {
	return (
		<>
			<a className={`${secondClass} btn-reset button-download`} href={downloadUrl} download>
				<img src={image} alt="download" />
			</a>
		</>
	);
};
ButtonDownload.propTypes = {
	secondClass: PropTypes.string.isRequired,
	downloadUrl: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

export default ButtonDownload;
