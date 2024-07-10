import { css } from "@emotion/css";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <div
        className={css`
          margin-top: 8rem;
        `}
      >
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
