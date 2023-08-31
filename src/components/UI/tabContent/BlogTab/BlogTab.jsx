/* eslint-disable react/no-unescaped-entities */
import './blogTab.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Photo from '../../../../assets/png/photo.png';

const BlogTab = () => {
	return (
		<div className="blog-tab">
			<div className="blog-tab__item item-dark">
				<img src={Photo} alt="" />
				<p className="description-normal">
					Вітаю! Мене звати ігор, і я{''}
					<span className="selection">frontend-developer</span> з понад
					дворічним досвідом створення сайтів та веб-додатків. Я палко
					захоплений створенням красивих та інтуїтивно зрозумілих інтерфейсів,
					які збагачують користувацький досвід. У світі, де веб-технології
					постійно розвиваються, я завжди готовий бути на крок попереду. Мій
					досвід включає роботу з сучасними фреймворками та бібліотеками, такими
					як React, що дозволяє мені створювати динамічні та реактивні
					веб-додатки.
				</p>{' '}
				<p className="description-normal">
					Моя мета - не тільки створювати гарний код, але й забезпечувати
					легкість обслуговування та розширення. Запрошую вас переглянути{' '}
					<Link to={'#portfolio'} className="selection-link">
						розділ портфоліо
					</Link>
					, де ви зможете ознайомитися з деякими із моїх робіт. Я завжди
					відкритий до обговорення ваших пропозицій та побажань. Не соромтесь
					зв'язатися зі мною, якщо у вас виникнуть питання, пропозиції або
					потенційні проекти, над якими ми б з вами могли хотіли співпрацювати
					контакти або форму ви знайдете{' '}
					<Link to={'#contacts'} className="selection-link">
						нижче
					</Link>
				</p>
			</div>

			{/* <div className="blog-tab__item item-dark"></div> */}
		</div>
	);
};

export default BlogTab;
