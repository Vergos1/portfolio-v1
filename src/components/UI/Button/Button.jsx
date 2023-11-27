//todo можно сделать единый вариант для всех кнопок
import style from './Button.module.scss';
import { Link } from 'react-router-dom';
import IconBack from '../../../assets/icon/icon-back.svg?react';
import IconForward from '../../../assets/icon/icon-forward.svg?react';

const Button = ({
  children,
  secondClass,
  type,
  styleVariant,
  url = '/',
  size = 's',
  isLinkBack = false,
  isLink = false,
  isDownload = false,
  wautoMobile = false,
  isDisabled = false,
}) => {
  return (
    <>
      {isLinkBack ? (
        <Link
          to={url}
          target={isLink ? '_blank' : ''}
          disabled={isDisabled}
          className={`${style.buttonDefaultStyle} ${
            wautoMobile && style.wautoMobile
          } ${style[styleVariant]} ${style[size]} btn-reset`}
        >
          {isLinkBack && <IconBack />}
          {children}
        </Link>
      ) : isLink ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${style.buttonDefaultStyle} ${
            wautoMobile && style.wautoMobile
          } ${style[styleVariant]} ${style[size]} btn-reset`}
        >
          {children}
          {isLink && <IconForward />}
        </a>
      ) : isDownload ? (
        <a
          href={url}
          className={`${style.buttonDefaultStyle} ${
            wautoMobile && style.wautoMobile
          } ${style[styleVariant]} ${style[size]} btn-reset`}
          disabled={isDisabled}
        >
          {children}
        </a>
      ) : (
        <button
          disabled={isDisabled}
          className={`${style.buttonDefaultStyle} ${
            wautoMobile && style.wautoMobile
          } ${style[styleVariant]} ${style[size]} btn-reset`}
          type={type}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
