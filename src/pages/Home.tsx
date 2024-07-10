import CatetoryGrid from "@/components/Category/CategoryGrid";
import RecommandBtn from "@/components/RecommandBtn";
import RealTimeRanking from "@/components/RealTimeRanking";
import HomeBanner from "@/components/common/Banner/HomeBanner";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <CatetoryGrid />
      <RecommandBtn />
      <RealTimeRanking />
    </>
  );
};

export default Home;
