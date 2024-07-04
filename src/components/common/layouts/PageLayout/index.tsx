import { css } from "@emotion/css";
import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}
const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div>
      <Header />
      {children}
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
