import styled from '@emotion/styled';
import MenuButton from './MenuButton';
import GiftList from './GiftList';
export default function GiftRanking() {
  return (
    <GiftRankingWrapper>
      <GiftRankingInner>
        <GiftRankingTitle>실시간 급상승 선물랭킹</GiftRankingTitle>
        <GiftRankingMenuContainer>
          <GiftRankingMenuTop>
            <MenuButton icon="ALL" text="전체" />
            <MenuButton icon="👩‍🦰" text="여성이" />
            <MenuButton icon="👱‍♂️" text="남성이" />
            <MenuButton icon="👦🏻" text="청소년이" />
          </GiftRankingMenuTop>
          <EmptyBox />
          <GiftRankingMenuBottom>
            <GiftRankingMenuBottomText>받고 싶어한</GiftRankingMenuBottomText>
            <GiftRankingMenuBottomText>많이 선물한</GiftRankingMenuBottomText>
            <GiftRankingMenuBottomText>위시로 받은</GiftRankingMenuBottomText>
          </GiftRankingMenuBottom>
        </GiftRankingMenuContainer>
        <GiftList></GiftList>
      </GiftRankingInner>
    </GiftRankingWrapper>
  );
}

const GiftRankingWrapper = styled.section`
  width: 100vw;
  height: 806px;
  display: flex;
  justify-content: center;
`;

const GiftRankingInner = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const GiftRankingTitle = styled.h2`
  width: 100%;
  font-size: 35px;
  font-weight: bold;
  line-height: 50px;
  text-align: center;
`;

const GiftRankingMenuContainer = styled.div`
  width: 100%;
  height: 207px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0px 7px;
`;

const GiftRankingMenuTop = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const EmptyBox = styled.div`
  width: 100%;
  height: 16px;
  background-color: #fff;
`;

const GiftRankingMenuBottom = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgb(230, 241, 255);
  border: 1px solid rgba(70, 132, 233, 0.1);
  border-radius: 8px;
`;

// color : rgb(70,132,233);
const GiftRankingMenuBottomText = styled.button`
  text-align: center;
  width: 177px;
  font-weight: 400;
  height: 62px;
  font-size: 22px;
  line-height: 22px;
  color: rgb(70, 132, 233, 0.7);
`;
