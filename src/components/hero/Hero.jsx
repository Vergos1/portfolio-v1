import "./hero.scss";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ButtonDownload from "../UI/ButtonDownload/ButtonDownload.jsx";
import CssIcon from "../../assets/icon/css-animation.svg";
import HtmlIcon from "../../assets/icon/html-animation.svg";
import JsIcon from "../../assets/icon/js-animation.svg";
import TsIcon from "../../assets/icon/ts-animation.svg";
import PhpIcon from "../../assets/icon/php-animation.svg";
import DownloadIcon from "../../assets/icon/download-icon.svg";

const Hero = () => {
  const animationText = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: 1, duration: 0.8, type: "tween" },
    }),
  };
  const { t } = useTranslation();
  return (
    <section className="hero" id="main">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        viewport={{ once: true }}
        className="container container-hero"
      >
        <div className="hero__animation-item">
          <img src={CssIcon} alt="css" className="hero__animation-figure1" />
          <img src={HtmlIcon} alt="html" className="hero__animation-figure2" />
          <img src={JsIcon} alt="js" className="hero__animation-figure3" />
          <img src={TsIcon} alt="ts" className="hero__animation-figure4" />
          <img src={PhpIcon} alt="php" className="hero__animation-figure5" />

          {/*<CssIcon className="hero__animation-figure1" />*/}
          {/*<HtmlIcon className="hero__animation-figure2" />*/}
          {/*<JsIcon className="hero__animation-figure3" />*/}
          {/*<TsIcon className="hero__animation-figure4" />*/}
          {/*<PhpIcon className="hero__animation-figure5" />*/}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hero__inner"
        >
          <div className="hero__item">
            <motion.h1
              variants={animationText}
              custom={2}
              className="hero__title"
            >
              {t("main_page.hero_section_title")} <br />{" "}
              {t("main_page.hero_section_title2")} -{" "}
              <span className="hero__title_neon">frontend developer</span>
            </motion.h1>
            <motion.p
              variants={animationText}
              custom={3}
              className="hero__description"
            >
              {t("main_page.hero_section_description")}{" "}
              <Link to={"#contact"} className="selection-link">
                {t("main_page.hero_section_description_selected")}
              </Link>
              {t("main_page.hero_section_description2")}
            </motion.p>
            <motion.div
              variants={animationText}
              custom={4}
              className="hero__download-item inline-item"
            >
              <p className="hero__download-text">
                {" "}
                {t("main_page.hero_section_download")} CV:
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
