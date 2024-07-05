import styled from '@emotion/styled';

import { Container } from '../common/layouts/Container';
import { Grid } from '../common/layouts/Grid';
import TrendGiftRankingGrid from './TrendGiftRankingGrid';

const Title = styled.h2`
  color: rgb(0, 0, 0);
  width: 100%;
  text-align: center;
  font-size: 35px;
  line-height: 30px;
  font-weight: 700;
`;

const FiltersContainer = styled.div``;

const FilterItem = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 100%;
`;
const Wrapper = styled(Grid)`
  padding: 20px 0px 7px;
  max-width: 100%;
`;

const Icon = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 24px;
  font-size: 20px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  background-color: rgb(230, 241, 255);
  transition: background-color 200ms ease 0s;
  cursor: pointer;
`;

const FilterType = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 64px;
  background-color: rgb(230, 241, 255);
  margin: 0 auto;
  border-radius: 12px;
  border: 1px solid rgba(70, 132, 233, 0.1);

  button {
    padding: 20px 30px;
    color: rgba(70, 132, 233, 0.7);
    font-weight: 400;
    font-size: 22px;
  }
`;

const TrendGiftRanking = () => {
  return (
    <Container>
      <Title>실시간 급상승 선물 랭킹</Title>
      <FiltersContainer>
        <Wrapper columns={4} gap={12}>
          <FilterItem>
            <Icon>ALL</Icon>
            <p>전체</p>
          </FilterItem>
          <FilterItem>
            <Icon>👩🏻‍🦳</Icon>
            <p>여성이</p>
          </FilterItem>
          <FilterItem>
            <Icon>👨🏻‍🦳</Icon>
            <p>남성이</p>
          </FilterItem>
          <FilterItem>
            <Icon>👦🏻</Icon>
            <p>청소년이</p>
          </FilterItem>
        </Wrapper>

        <div style={{ height: '16px' }}></div>
        <FilterType>
          <button>받고 싶어한</button>
          <button>많이 선물한</button>
          <button>위시로 받은</button>
        </FilterType>
        <TrendGiftRankingGrid></TrendGiftRankingGrid>
      </FiltersContainer>
    </Container>
  );
};

export default TrendGiftRanking;
