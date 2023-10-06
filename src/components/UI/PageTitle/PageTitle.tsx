import "./pageTitle.scss";
import React from "react";
import { motion } from "framer-motion";

type titleProps = {
	title: string;
	subtitle: string;
	secondClass: string;
};

const animationText = {
	hidden: {
		y: 200,
		opacity: 0,
	},
	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

const PageTitle: React.FC<titleProps> = ({ title, subtitle, secondClass, ...props }) => {
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
				{title}
			</motion.h3>
			<motion.p
				variants={animationText}
				custom={3}
				className={`${secondClass}__subtitle subtitle-tooltip`}
			>
				{subtitle}
			</motion.p>
		</motion.div>
	);
};
export default PageTitle;
