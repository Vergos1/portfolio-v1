import style from "./preloader.module.scss";
import React from 'react';

const Preloader: React.FC = () => {
  return (
   <div className={style.background}
   >
     <svg className={style.loader} viewBox="0 0 50 50">
       <path className={style.corners} d="m 0 12.5 l 0 -12.5 l 50 0 l 0 50 l -50 0 l 0 -37.5"/>
       <text x="12" y="34" className={style.text}>I</text>
       <text x="15" y="34" className={style.text}>Y</text>
       <text x="14" y="42" className={style.textDev}>frontend</text>
     </svg>
   </div>
  );
};

export default Preloader;
