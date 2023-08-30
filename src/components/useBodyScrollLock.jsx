import { useState, useEffect } from "react";

export const useBodyScollLock = (value) => {
  const bodyStyle = document.body.style;
  const [isLocked, setIsLocked] = useState(false);
  const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
  useEffect(() => {
    bodyStyle.overflowY = isLocked ? "hidden" : "";
    bodyStyle.paddingRight = isLocked ? `${scrollBarCompensation}px` : "";
  }, [isLocked, bodyStyle, scrollBarCompensation]);
  const toggle = (value) => setIsLocked(value);

  return [isLocked, toggle];
};
