import styled from "@emotion/styled";
import { useState } from "react";

import { RankingGoodsItems } from "@/components/common/GoodsItem/Ranking";
import { Grid } from "@/components/common/layouts/Grid";
import { breakpoints } from "@/styles/variants";

type RankingItemType = {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
  rankingIndex: number;
};

type Prop = {
  children: Array<RankingItemType>;
};

const RankingGrid: React.FC<Prop> = ({ children }) => {
  const [isFold, setIsFold] = useState(true);
  let rankingList: Array<RankingItemType>;

  const handleClick = () => {
    setIsFold(isFold ? false : true);
  };

  if (isFold) {
    rankingList = children.slice(0, 6);
  } else {
    rankingList = children;
  }

  return (
    <Wrapper>
      <StyledGrid
        columns={{
          initial: 3,
          xs: 3,
          sm: 4,
          md: 6,
          lg: 6,
        }}
      >
        {rankingList.map((element, index) => (
          <RankingGoodsItems
            imageSrc={element.imageSrc}
            subtitle={element.subtitle}
            title={element.title}
            amount={element.amount}
            rankingIndex={element.rankingIndex}
            key={index}
          />
        ))}
      </StyledGrid>
      <StyledDiv>
        <StyledButton onClick={handleClick}>접기</StyledButton>
      </StyledDiv>
    </Wrapper>
  );
};
export default RankingGrid;

const Wrapper = styled.div`
  padding: 40px 0 60px;

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 20 0 30px;
  }
`;

const StyledGrid = styled(Grid)`
  gap: 16px;
`;

const StyledDiv = styled.div`
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  border-radius: 4px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 200ms ease 0s;
  box-shadow: rgb(204, 204, 204) 0px 0px 0px 1px inset;
  color: rgb(17, 17, 17);

  width: 480px;
  height: 60px;
  font-size: 16px;

  @media screen and (max-width: ${breakpoints.sm}) {
    width: 100%;
    height: 40px;
    font-size: 15px;
  }
`;
