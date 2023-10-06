import "./appHeader.scss";
import MainLogo from "../UI/MainLogo/MainLogo";
import NavLinkCustom from "../UI/navLinkCustom/NavLinkCustom";


const AppHeader = () => {
  return (
    <header className="header">
      <div className="container container-header">
        <MainLogo />
        {/* main logo in my portfolio application */}
        <NavLinkCustom />
        {/* navbar menu  */}
        <div className="header__locales inline-item">
          <button className="header__button" type="button">
            UA
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
