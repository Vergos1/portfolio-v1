import "./skillsSection.scss";
import React, {useState} from "react";
import {motion} from "framer-motion";
import PageTitle from "../UI/PageTitle/PageTitle";
import TabMenuButton from "../UI/TabMenuButton/TabMenuButton";
import ExperienceTab from "../UI/tabContent/ExperienceTab/ExperienceTab";
import SkillsTab from "../UI/tabContent/SkillsTab/SkillsTab";


const tabMenuData = [
  {
    id: 1,
    title: "стек",
  },
  {
    id: 2,
    title: "досвід",
  },
];

const animationBlock = {
  hidden: {
    x: 1000,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.2},
  },
}

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabMenuData[0].id);
  return (
   <section className="skills">
     <div className="container container-skills" id="skills">
       <PageTitle
        title="навички"
        subtitle="коротко про мої навички"
        secondClass="skills"
       />
       <motion.div
        initial="hidden"
        whileInView="visible"
        variants={animationBlock}
        className="skills__inner"
       >
         <TabMenuButton
          data={tabMenuData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
         />
         <motion.div className="skills__tab">
           {activeTab === 1 && <SkillsTab/>}
           {activeTab === 2 && <ExperienceTab/>}
         </motion.div>
       </motion.div>
     </div>
   </section>
  );
};

export default SkillsSection;
