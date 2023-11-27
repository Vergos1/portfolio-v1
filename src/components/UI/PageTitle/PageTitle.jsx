import "./pageTitle.scss";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PageTitle = ({ title, subtitle, secondClass, ...props }) => {
  const animationText = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => ({
      opacity: 1,
      transition: { duration: 0.7, type: "tween" },
    }),
  };
  const { t } = useTranslation();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={animationText}
      custom={1}
      viewport={{ once: true }}
      className={`${secondClass}__title-item page-title-item`}
    >
      <motion.h3
        variants={animationText}
        custom={2}
        className={`${secondClass}__title`}
      >
        {t(`${title}`)}
      </motion.h3>
      <motion.p
        variants={animationText}
        custom={3}
        className={`${secondClass}__subtitle subtitle-tooltip`}
      >
        {t(`${subtitle}`)}
      </motion.p>
    </motion.div>
  );
};
export default PageTitle;
