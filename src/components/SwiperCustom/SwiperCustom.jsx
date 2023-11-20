import "./swiperCustom.scss";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, EffectCoverflow, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import PrevIcon from "../../assets/icon/prev-icon.svg";
import NextIcon from "../../assets/icon/next-icon.svg";
import swiperItemData from "../../data/staticData/swiperItemData.json";
import { useTranslation } from "react-i18next";

const animationBlock = {
	hidden: {
		opacity: 0,
	},
	visible: (custom) => ({
		opacity: 1,
		transition: { delay: custom * 0.4 },
	}),
};

const SwiperCustom = () => {
	const { t } = useTranslation();
	return (
		<motion.div initial="hidden" whileInView="visible" variants={animationBlock} custom={1} className="swiper-custom">
			<div className="swiper-custom__navigation">
				<button className="swiper-custom__prev-button" type="button">
					<img src={PrevIcon} alt="preview" />
				</button>
				<button className="swiper-custom__next-button" type="button">
					<img src={NextIcon} alt="next" />
				</button>
			</div>
			<Swiper
				modules={[Navigation, Pagination, A11y, Autoplay]}
				navigation={{
					prevEl: ".swiper-custom__prev-button",
					nextEl: ".swiper-custom__next-button",
				}}
				autoplay={{
					delay: 1500,
					disableOnInteraction: false,
				}}
				pagination={{ clickable: true }}
				breakpoints={{
					360: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					480: {
						slidesPerView: 2,
						spaceBetween: 24,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 32,
					},
				}}
			>
				{swiperItemData.map((item) => {
					return (
						<SwiperSlide key={item.id} className="slide-dark">
							<div className="swiper-custom__swiper-header">
								<img src={item.image} alt={item.title} />
								<h5 className="swiper-custom__title">{t(`${item.title}`)}</h5>
							</div>
							<p className="swiper-custom__description description-normal">{t(`${item.description}`)}</p>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</motion.div>
	);
};

export default SwiperCustom;
