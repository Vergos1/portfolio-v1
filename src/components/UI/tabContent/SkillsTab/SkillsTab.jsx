import "./skillsTab.scss";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as DevavenuaLogo } from "../../../../assets/icon/devavenua-logo.svg";
import { ReactComponent as SwetrixLogo } from "../../../../assets/icon/swetrix-logo.svg";

const SkillsTab = () => {
	return (
		<div className="skills-tab">
			<h3 className="skills-tab__title">
				1 рік і 3 місяці <br />
				<span className="selected">комерційного досвіду</span>
			</h3>
			<div className="skills-tab__items">
				<div className="skills-tab__item item-dark">
					<div className="skills-tab__header">
						<div className="skills-tab__header-item">
							<DevavenuaLogo />
							<h4 className="skills-tab__company-name">devavenua</h4>
						</div>
						<p className="skills-tab__experience selected">6 міс.</p>
					</div>
					<div className="skills-tab__content">
						<p className="description-normal">
							Розробка веб-сайтів, мобільних додатків, програмного забезпечення,
							ботів. Графічний дизайн та брендинг.Компанія займаєтся:
							веброзробкою, розробкою ботів, смарт контрактами, розробкою ПЗ та
							дизайном
						</p>
					</div>
					<div className="skills-tab__footer">
						<p className="skills-tab__contacts-title">контакти</p>
						<div className="skills-tab__links">
							<Link to={"/"} className="selection-link">
								сайт
							</Link>
							<Link to={"/"} className="selection-link">
								соцмережі
							</Link>
						</div>
					</div>
				</div>
				<div className="skills-tab__item item-dark">
					<div className="skills-tab__header">
						<div className="skills-tab__header-item">
							<SwetrixLogo />
							<h4 className="skills-tab__company-name">swetrix</h4>
						</div>
						<p className="skills-tab__experience selected">9 міс.</p>
					</div>
					<div className="skills-tab__content">
						<p className="description-normal">
							Місія Swetrix - зробити революцію у світі веб-аналітики та
							веб-реклами. Swetrix - це програмне забезпечення для веб-аналітики
							з повністю відкритим вихідним кодом, орієнтоване на
							конфіденційність і сумісне з GDPR
						</p>
					</div>
					<div className="skills-tab__footer">
						<p className="skills-tab__contacts-title">контакти</p>
						<div className="skills-tab__links">
							<Link to={"/"} className="selection-link">
								сайт
							</Link>
							<Link to={"/"} className="selection-link">
								соцмережі
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillsTab;
