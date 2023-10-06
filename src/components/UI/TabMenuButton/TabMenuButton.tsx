import "./tabMenuButton.scss";
import React from "react";

type TabMenuButtonProps = {
	data: {
		id: number;
		title: string;
	}[];
	activeTab: number;
	setActiveTab: React.Dispatch<React.SetStateAction<number>>;
};
const TabMenuButton: React.FC<TabMenuButtonProps> = ({
	data,
	activeTab,
	setActiveTab,
}) => {
	return (
		<div className="tab-menu">
			{data.map((item, index) => (
				<button
					key={index}
					className={`tab-menu__button ${
						activeTab === item.id ? "active" : ""
					}`}
					onClick={() => setActiveTab(item.id)}
				>
					<span className="tab-menu__active-icon">{item.title}</span>
				</button>
			))}
		</div>
	);
};

export default TabMenuButton;
