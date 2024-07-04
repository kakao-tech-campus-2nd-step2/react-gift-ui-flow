import styled from "@emotion/styled";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { breakpoints } from "@/styles/variants";

import AiRecommand from "./AiRecommand";
import GiftRanking from "./GiftRanking";
import SelectFriend from "./SelectFriend";
import ThemeCategory from "./ThemeCategory";

const Main = () => {
  return (
    <div>
      <Header isLogin={false} />
      <div>
        <SelectFriend />
        <ThemeCategory />
        <AiRecommand />
        <Space />
        <GiftRanking />
      </div>
      <Footer />
    </div>
  );
};

export default Main;

const Space = styled.div`
  height: 120px;

  @media screen and (max-width: ${breakpoints.md}) {
    height: 80px;
  }
  @media screen and (max-width: ${breakpoints.sm}) {
    height: 40px;
  }
`;
