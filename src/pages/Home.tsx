import HomeBanner from "@/components/Banner/HomeBanner";
import Header from "@/components/Header";
import CatetoryGrid from "@/components/Category/CategoryGrid";
import RecommandBtn from "@/components/RecommandBtn";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeBanner />
      <CatetoryGrid />
      <RecommandBtn />
    </div>
  );
};

export default Home;
