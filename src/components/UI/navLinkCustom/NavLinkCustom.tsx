import "./navLinkCustom.scss";
import { Link } from "react-router-dom";

const navLinkData = [
	{
		id: 1,
		title: "Головна",
		url: "#main",
	},
	{
		id: 2,
		title: "Інформація",
		url: "#about-me",
	},
	{
		id: 3,
		title: "Навички",
		url: "#skills",
	},
	{
		id: 4,
		title: "Портфоліо",
		url: "#portfolio",
	},
	{
		id: 5,
		title: "Контакти",
		url: "#contacts",
	},
	// {
	//   id: 5,
	//   title: "Для замовників",
	//   url: "#for-customers",
	// },
];
const NavLinkCustom = () => {
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
