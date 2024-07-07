import styled from "@emotion/styled";
import { useState } from "react";

import { breakpoints } from "@/styles/variants";

import CategoryFilter from "./CategoryFilter";
import DetailFilter from "./DetailFilter";
import RankingGrid from "./RankingGrid";

const GiftRanking = () => {
  const [category, setCategory] = useState("all");
  const [detail, setDetail] = useState<string>("want");
  return (
    <Wrapper>
      <InnerWrapper>
        <StyledH2>실시간 급상승 선물 랭킹</StyledH2>
        <CategoryFilter category={category} setCategory={setCategory} />
        <Space />
        <DetailFilter detail={detail} setDetail={setDetail} />
        <RankingGrid children={rankingItems} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default GiftRanking;

const rankingItems = Array.from({ length: 21 }, (_, index) => ({
  imageSrc:
    "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
  subtitle: "BBQ",
  title: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
  amount: 29000,
  rankingIndex: index + 1,
}));

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  padding: 0 16px 80px;

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 0 16px 32px;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1024px;

  @media screen and (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

const Space = styled.div`
  width: 100%;
  height: 16px;
`;

const StyledH2 = styled.h2`
  color: rgb(0, 0, 0);
  width: 100%;
  font-weight: 700;
  text-align: center;
  font-size: 35px;
  line-height: 50px;

  @media screen and (max-width: ${breakpoints.sm}) {
    text-align: left;
    font-size: 20px;
    line-height: 30px;
  }
`;
