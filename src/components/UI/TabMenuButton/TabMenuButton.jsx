import "./tabMenuButton.scss";
import React from "react";

const TabMenuButton = ({ data, activeTab, setActiveTab }) => {
	return (
		<div className="tab-menu">
			{data.map((item, index) => (
				<button key={index} className={`tab-menu__button ${activeTab === item.id ? "active" : ""}`} onClick={() => setActiveTab(item.id)}>
					<span className="tab-menu__active-icon">{item.title}</span>
				</button>
			))}
		</div>
	);
};

export default TabMenuButton;
