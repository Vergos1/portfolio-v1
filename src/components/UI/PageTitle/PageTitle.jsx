import "./pageTitle.scss";
import React from "react";
import PropTypes from "prop-types";

const PageTitle = (props) => {
  const { title, subtitle, secondClass } = props;
  return (
    <div className={`${secondClass}__title-item page-title-item`}>
      <h2 className={`${secondClass}__title`}>{title}</h2>
      <p className={`${secondClass}__subtitle subtitle-tooltip`}>{subtitle}</p>
    </div>
  );
};
PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  secondClass: PropTypes.string.isRequired,
};
export default PageTitle;
