import HomeBanner from "@/components/Banner/HomeBanner";
import Header from "@/components/Header";
import CatetoryGrid from "@/components/Category/CategoryGrid";
import RecommandBtn from "@/components/RecommandBtn";
import RealTimeRanking from "@/components/RealTimeRanking";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeBanner />
      <CatetoryGrid />
      <RecommandBtn />
      <RealTimeRanking />
    </div>
  );
};

export default Home;
