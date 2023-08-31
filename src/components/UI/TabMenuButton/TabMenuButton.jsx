import "./tabMenuButton.scss";
import React from "react";
import PropTypes from "prop-types";

const TabMenuButton = ({ data, activeTab, setActiveTab }) => {
  return (
    <div className="tab-menu">
      {data.map((item) => (
        <button
          key={item.id}
          className={`tab-menu__button ${
            item.id === activeTab ? "active" : ""
          }`}
          onClick={() => setActiveTab(item.id)}
        >
          <span className="tab-menu__active-icon">{item.title}</span>
        </button>
      ))}
    </div>
  );
};

TabMenuButton.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeTab: PropTypes.number,
  setActiveTab: PropTypes.func,
};

export default TabMenuButton;
