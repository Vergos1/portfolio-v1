import "./experienceTab.scss";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {ReactComponent as DevavenuaLogo} from "../../../../assets/icon/devavenua-logo.svg";
import {ReactComponent as SwetrixLogo} from "../../../../assets/icon/swetrix-logo.svg";



const animationBlock = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: {delay: custom * 0.2},
  }),
}
const ExperienceTab = () => {
  return (
   <motion.div initial="hidden"
               whileInView="visible"
               className="experience-tab">
     <motion.h4 variants={animationBlock} custom={0} className="experience-tab__title">
       більше року <br/>
       <span className="selected">комерційного <br/> досвіду</span>
     </motion.h4>
     <motion.div initial="hidden"
                 whileInView="visible"
                 className="experience-tab__items">
       <motion.div variants={animationBlock}
                   custom={1}
                   className="experience-tab__item item-charcoal">
         <div className="experience-tab__header">
           <div className="experience-tab__header-item">
             <DevavenuaLogo/>
             <h4 className="experience-tab__company-name">devavenua</h4>
           </div>
           <p className="experience-tab__experience selected">6 міс.</p>
         </div>
         <div className="experience-tab__content">
           <p className="description-normal">
             Розробка веб-сайтів, мобільних додатків, програмного забезпечення,
             ботів. Графічний дизайн та брендинг.Компанія займаєтся:
             веброзробкою, розробкою ботів, смарт контрактами, розробкою ПЗ та
             дизайном
           </p>
         </div>
         <div className="experience-tab__footer">
           <p className="experience-tab__contacts-title">контакти</p>
           <div className="experience-tab__links">
             <Link to={"/"} className="selection-link">
               сайт
             </Link>
             <Link to={"/"} className="selection-link">
               соцмережі
             </Link>
           </div>
         </div>
       </motion.div>
       <motion.div variants={animationBlock}
                   custom={2}
                   className="experience-tab__item item-charcoal">
         <div className="experience-tab__header">
           <div className="experience-tab__header-item">
             <SwetrixLogo/>
             <h4 className="experience-tab__company-name">swetrix</h4>
           </div>
           <p className="experience-tab__experience selected">9 міс.</p>
         </div>
         <div className="experience-tab__content">
           <p className="description-normal">
             Місія Swetrix - зробити революцію у світі веб-аналітики та
             веб-реклами. Swetrix - це програмне забезпечення для веб-аналітики
             з повністю відкритим вихідним кодом, орієнтоване на
             конфіденційність і сумісне з GDPR
           </p>
         </div>
         <div className="experience-tab__footer">
           <p className="experience-tab__contacts-title">контакти</p>
           <div className="experience-tab__links">
             <Link to={"/"} className="selection-link">
               сайт
             </Link>
             <Link to={"/"} className="selection-link">
               соцмережі
             </Link>
           </div>
         </div>
       </motion.div>
     </motion.div>
   </motion.div>
  );
};

export default ExperienceTab;
