import HomeBanner from "@/components/Banner/HomeBanner";
import Header from "@/components/Header";
import CatetoryGrid from "@/components/Category/CategoryGrid";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeBanner />
      <CatetoryGrid />
    </div>
  );
};

export default Home;
