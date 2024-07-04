import CatetoryGrid from "@/components/Category/CategoryGrid";
import RecommandBtn from "@/components/RecommandBtn";
import RealTimeRanking from "@/components/RealTimeRanking";
import PageLayout from "@/components/common/layouts/PageLayout";
import HomeBanner from "@/components/common/Banner/HomeBanner";

const Home = () => {
  return (
    <PageLayout>
      <HomeBanner />
      <CatetoryGrid />
      <RecommandBtn />
      <RealTimeRanking />
    </PageLayout>
  );
};

export default Home;
