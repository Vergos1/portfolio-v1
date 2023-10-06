import "./swiperCustom.scss";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { motion } from "framer-motion";
import { ReactComponent as PrevIcon } from "../../../assets/icon/prev-icon.svg";
import { ReactComponent as NextIcon } from "../../../assets/icon/next-icon.svg";
import swiperItemData from "../../../data/staticData/swiperItemData.json";


const animationBlock = {
	hidden: {
		x: 1000,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.4 },
	}),
};

const SwiperCustom: React.FC = () => {
  return (
  <motion.div initial="hidden"
              whileInView="visible"
              variants={animationBlock}
              custom={1}
              className="swiper-custom">
    <div className="swiper-custom__navigation">
      <button
      className="swiper-custom__prev-button"
      type="button"
      >
        <PrevIcon />
      </button>
      <button
      className="swiper-custom__next-button"
      type="button"
      >
        <NextIcon />
      </button>
    </div>
    <Swiper
    modules={[Navigation, Pagination, A11y]}
    spaceBetween={30}
    slidesPerView={3}
    navigation={{
      prevEl: ".swiper-custom__prev-button",
      nextEl: ".swiper-custom__next-button"
    }}
    pagination={{ clickable: true }}
    // onSlideChange={() => console.log("slide change")}//!console.log(debug)
    // onSwiper={(swiper) => console.log(swiper)} //!console.log(debug)
    >
      {swiperItemData.map((item) => {
        return (
        <SwiperSlide key={item.id} className="item-dark">
          <div className="swiper-custom__swiper-header">
            <img src={item.image} alt={item.title} />
            <h5 className="swiper-custom__title">
              {item.title}
            </h5>
          </div>
          <p className="swiper-custom__description description-normal">
            {item.description}
          </p>
        </SwiperSlide>
        );
      })}
    </Swiper>
  </motion.div>
  );
};

export default SwiperCustom;
