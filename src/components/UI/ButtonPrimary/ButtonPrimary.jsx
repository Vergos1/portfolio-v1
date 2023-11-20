//todo можно сделать единый вариант для всех кнопок
import React from "react";



const ButtonPrimary = ({ text, secondClass, types }) => {

  return (
    <>
      <button
        className={`${secondClass} btn-reset button-primary `}
        type={types}
      >
        {text}
      </button>
    </>
  );
};
export default ButtonPrimary;
