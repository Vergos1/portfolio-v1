import "swiper/scss";
import "swiper/scss/pagination";
import "../../styles/ui/swiperCustom.scss";
import style from "./SwiperCustom.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { swiperItemData } from "@/data/staticData/swiperItemData.js";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PrevIcon from "../../assets/icon/prev-icon.svg";
import NextIcon from "../../assets/icon/next-icon.svg";

const SwiperCustom = () => {
  const animationBlock = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => ({
      opacity: 1,
      transition: { duration: 0.8, type: "tween" },
    }),
  };
  const { t } = useTranslation();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={animationBlock}
      className={style.swiper}
    >
      <div className={style.navigation}>
        <button className={style.prevButton} type="button">
          <img src={PrevIcon} alt="preview" />
        </button>
        <button className={style.nextButton} type="button">
          <img src={NextIcon} alt="next" />
        </button>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        navigation={{
          prevEl: style.prevButton,
          nextEl: style.nextButton,
        }}
        autoplay={{
          delay: 2500,
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
            <SwiperSlide key={item.id}>
              <Link to={"/about"} className={`${style.slide} slide-dark`}>
                <div className={style.header}>
                  <img src={item.image} alt={t(item.title)} />
                  <h5 className={style.title}>{t(item.title)}</h5>
                </div>
                <p className={`${style.description} description-normal`}>
                  {t(item.description)}
                </p>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default SwiperCustom;
