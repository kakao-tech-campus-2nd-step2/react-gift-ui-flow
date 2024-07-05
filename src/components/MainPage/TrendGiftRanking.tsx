import styled from '@emotion/styled';
import { useState } from 'react';

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

const Wrapper = styled(Grid)`
  padding: 20px 0px 7px;
  max-width: 100%;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 24px;
  font-size: 20px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  background-color: rgb(230, 241, 255);
  transition: background-color 200ms ease 0s;
`;

const FilterItem = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 100%;
  cursor: pointer;

  &.active {
    p {
      color: rgb(70, 132, 233);
      font-weight: 700;
    }

    div {
      background-color: rgb(70, 132, 233);
      font-weight: 700;
      color: white;
    }
  }
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
    cursor: pointer;
    outline: none;
    border: none;
    background: none;
    transition: color 0.2s ease-in-out;
  }

  button.active {
    color: rgba(70, 132, 233, 1);
    font-weight: 700;
  }
`;

const TrendGiftRanking = () => {
  const [genderFilter, setGenderFilter] = useState('ALL');
  const [rankingFilter, setRankingFilter] = useState('RECEIVING');

  const handleGenderFilter = (filter: string) => {
    setGenderFilter(filter);
  };

  const handleRankingFilter = (filter: string) => {
    setRankingFilter(filter);
  };

  return (
    <Container>
      <Title>실시간 급상승 선물 랭킹</Title>
      <FiltersContainer>
        <Wrapper columns={4} gap={12}>
          <FilterItem
            className={genderFilter === 'ALL' ? 'active' : ''}
            onClick={() => handleGenderFilter('ALL')}
          >
            <Icon>ALL</Icon>
            <p>전체</p>
          </FilterItem>
          <FilterItem
            className={genderFilter === 'FEMALE' ? 'active' : ''}
            onClick={() => handleGenderFilter('FEMALE')}
          >
            <Icon>👩🏻‍🦳</Icon>
            <p>여성이</p>
          </FilterItem>
          <FilterItem
            className={genderFilter === 'MALE' ? 'active' : ''}
            onClick={() => handleGenderFilter('MALE')}
          >
            <Icon>👨🏻‍🦳</Icon>
            <p>남성이</p>
          </FilterItem>
          <FilterItem
            className={genderFilter === 'TEENAGER' ? 'active' : ''}
            onClick={() => handleGenderFilter('TEENAGER')}
          >
            <Icon>👦🏻</Icon>
            <p>청소년이</p>
          </FilterItem>
        </Wrapper>

        <div style={{ height: '16px' }}></div>
        <FilterType>
          <button
            className={rankingFilter === 'RECEIVING' ? 'active' : ''}
            onClick={() => handleRankingFilter('RECEIVING')}
          >
            받고 싶어한
          </button>
          <button
            className={rankingFilter === 'SENDING' ? 'active' : ''}
            onClick={() => handleRankingFilter('SENDING')}
          >
            많이 선물한
          </button>
          <button
            className={rankingFilter === 'WISH' ? 'active' : ''}
            onClick={() => handleRankingFilter('WISH')}
          >
            위시로 받은
          </button>
        </FilterType>
        <TrendGiftRankingGrid></TrendGiftRankingGrid>
      </FiltersContainer>
    </Container>
  );
};

export default TrendGiftRanking;
