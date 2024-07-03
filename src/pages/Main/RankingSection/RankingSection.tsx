import React, { useState } from 'react';
import Container from '@components/Layout/Container';
import Grid from '@components/Layout/Grid';
import { RankingContainer, Title, CategoryContainer, FilterButton, CategoryButton } from '@pages/Main/RankingSection/RankingSection.styles';

const RankingSection = () => {
  const [filter, setFilter] = useState('전체');
  const [category, setCategory] = useState('받고 싶어한');

  return (
    <RankingContainer>
      <Container
        width="100%"
        justifyContent="center"
        maxWidth="1024px"
        alignItems="center"
      >
        <Container
          width="100%"
          flexDirection="column"
        >
          <Title>실시간 급상승 선물랭킹</Title>
          <Container
            width="100%"
            padding="20px 0px 7px"
            flexDirection="column"
            justifyContent="center"
          >
            <Grid
              columns={4}
            >
              <FilterButton
                active={filter === '전체'}
                onClick={() => setFilter('전체')}
              >
                <Container
                  justifyContent="center"
                  alignItems="center"
                >
                  ALL
                </Container>
                <p>전체</p>
              </FilterButton>
              <FilterButton
                active={filter === '여성이'}
                onClick={() => setFilter('여성이')}
              >
                <Container
                  justifyContent="center"
                  alignItems="center"
                >
                  👩🏻
                </Container>
                <p>여성이</p>
              </FilterButton>
              <FilterButton
                active={filter === '남성이'}
                onClick={() => setFilter('남성이')}
              >
                <Container
                  justifyContent="center"
                  alignItems="center"
                >
                  👨🏻
                </Container>
                <p>남성이</p>
              </FilterButton>
              <FilterButton
                active={filter === '청소년이'}
                onClick={() => setFilter('청소년이')}
              >
                <Container
                  justifyContent="center"
                  alignItems="center"
                >
                  👦🏻
                </Container>
                <p>청소년이</p>
              </FilterButton>
            </Grid>
          </Container>
        </Container>
      </Container>
      <Container
        padding="20px 0px 7px"
      >
        <CategoryContainer>
          <CategoryButton
            active={category === '받고 싶어한'}
            onClick={() => setCategory('받고 싶어한')}
          >
            받고 싶어한
          </CategoryButton>
          <CategoryButton
            active={category === '많이 선물한'}
            onClick={() => setCategory('많이 선물한')}
          >
            많이 선물한
          </CategoryButton>
          <CategoryButton
            active={category === '위시로 받은'}
            onClick={() => setCategory('위시로 받은')}
          >
            위시로 받은
          </CategoryButton>
        </CategoryContainer>
      </Container>
    </RankingContainer>
  );
};

export default RankingSection;
