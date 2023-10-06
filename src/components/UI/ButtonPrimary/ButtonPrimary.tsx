//todo можно сделать единый вариант для всех кнопок
import React from "react";

interface ButtonPrimaryProps {
  text: string;
  secondClass: string;
  types: any;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ text, secondClass, types }) => {

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
