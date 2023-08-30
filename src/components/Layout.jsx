import { Outlet } from "react-router-dom";
import AppHeader from "./appHeader/AppHeader";
import AppFooter from "./appFooter/AppFooter";
import "../styles/variables.scss";

const Layout = () => {
  return (
    <>
      <AppHeader />
      <main className="main">
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
};

export default Layout;
