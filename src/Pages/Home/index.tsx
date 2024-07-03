import AiReference from "@/components/common/HomeComponents/AiReference";
import Banner from "@/components/common/HomeComponents/Banner";
import Ranking from "@/components/common/HomeComponents/Ranking";
import ThemeCategory from "@/components/common/HomeComponents/ThemeCategory";




export const Home = () => {
  return(
    <>
      <Banner></Banner>
      <ThemeCategory></ThemeCategory>
      <AiReference></AiReference>
      <Ranking></Ranking>
    </>
  )
}