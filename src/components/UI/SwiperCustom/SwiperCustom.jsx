/* eslint-disable react/no-unescaped-entities */
import "./swiperCustom.scss";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { ReactComponent as PrevIcon } from "../../../assets/icon/prev-icon.svg";
import { ReactComponent as NextIcon } from "../../../assets/icon/next-icon.svg";
import swiperItemData from "../../../data/staticData/swiperItemData";

const SwiperCustom = () => {
  return (
    <div className="swiper-custom">
      <div className="swiper-custom__navigation">
        <button className="swiper-custom__prev-button" type="button">
          <PrevIcon />
        </button>
        <button className="swiper-custom__next-button" type="button">
          <NextIcon />
        </button>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation={{
          prevEl: ".swiper-custom__prev-button",
          nextEl: ".swiper-custom__next-button",
        }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {swiperItemData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="swiper-custom__swiper-header">
                {item.image()}
                <h3 className="swiper-custom__title">{item.title}</h3>
              </div>
              <p className="swiper-custom__description description-normal">
                {item.description}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperCustom;
