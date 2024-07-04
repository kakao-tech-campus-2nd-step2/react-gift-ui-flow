import styled from "@emotion/styled";
import { useContext } from "react";

import { AuthTokenContext } from "@/App";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { breakpoints } from "@/styles/variants";

import AiRecommand from "./AiRecommand";
import GiftRanking from "./GiftRanking";
import SelectFriend from "./SelectFriend";
import ThemeCategory from "./ThemeCategory";

const Main = () => {
  const authToken = useContext(AuthTokenContext);

  if (authToken) {
    // 로그인 O
    console.log("로그인 O");
  } else {
    // 로그인 X
    console.log("로그인 X");
  }

  return (
    <div>
      <Header />
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
