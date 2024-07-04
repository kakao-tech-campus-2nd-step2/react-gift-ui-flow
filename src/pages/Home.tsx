import HomeBanner from "@/components/Banner/HomeBanner";
import Header from "@/components/Header";
import CatetoryGrid from "@/components/Category/CategoryGrid";
import RecommandBtn from "@/components/RecommandBtn";
import RealTimeRanking from "@/components/RealTimeRanking";
import Footer from "@/components/Footer";
import { css } from "@emotion/css";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeBanner />
      <CatetoryGrid />
      <RecommandBtn />
      <RealTimeRanking />
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

export default Home;
