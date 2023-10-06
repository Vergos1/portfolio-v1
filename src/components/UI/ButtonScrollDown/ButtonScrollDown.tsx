//todo можно сделать единый вариант для всех кнопок
//dntuse не используется
import "./buttonScrollDown.scss";
import React from "react";
import { ReactComponent as ScrollDownButton } from "../../../assets/icon/scrollDown-icon.svg";

type ButtonScrollDownProps = {
  link: string;
}
const ButtonScrollDown: React.FC<ButtonScrollDownProps> = ({ link }) => {
  const handleScroll = () => {
    const targetElement = document.querySelector(link);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
  <div className="scroll-down">
    <button className="scroll-down__button" onClick={handleScroll}>
      <ScrollDownButton />
    </button>
  </div>
  );
};
export default ButtonScrollDown;
