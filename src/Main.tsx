import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Image } from '@/components/common/Image';
import { Grid } from '@/components/common/layouts/Grid';

import { Container } from './components/common/layouts/Container';
 
const Main: React.FC = () => {
  const themes = [
    { key: 'theme1', name: '생일', imgSrc: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'theme2', name: '졸업선물', imgSrc: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'theme3', name: '스몰럭셔리', imgSrc: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'theme4', name: '명품선물', imgSrc: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'theme5', name: '결혼/집들이', imgSrc: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'theme6', name: '따뜻한선물', imgSrc: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'theme7', name: '가벼운선물', imgSrc: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'theme8', name: '팬심저격', imgSrc: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'theme9', name: '교환권', imgSrc: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'theme10', name: '건강/비타민', imgSrc: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'theme11', name: '과일/한우', imgSrc: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'theme12', name: '출산/키즈', imgSrc: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
  ];

  const [activeFilter, setActiveFilter] = useState('전체');
  const [activeRankingItem, setActiveRankingItem] = useState('r1');

  const handleRankingItemClick = (key: string) => {
    setActiveRankingItem(key);
  };

  const rankingItems = [
    { key: 'r1', name: '받고 싶어한' },
    { key: 'r2', name: '많이 선물한' },
    { key: 'r3', name: '위시로 받은' },
  ];

const MainContainer = styled.main`
  background-color: #fff;
  color: #333;
  padding: 10px 20px;
  p{
    font-size: 18px;
    font-weight: 200;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const ThemeLink = styled(Link)`
  padding: 10px;
  background-color: #fff;
  text-align: center;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  font-weight: 200;

  &:hover {
    background-color: #fff;
  }
`;

const ThemeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  margin-bottom: 3px; 
`;

const RecommendationContainer = styled(Container)`
  background-color: #fee500;
  border-radius: 12px;
  padding: 20px;
  margin-top: 20px;
  margin-left: 15px;
  p{
    font-weight: 600;
  }
`;

const RecommendationHeader = styled.h2`
  color: #aaa;
  font-size: 14px;
`;

const RankingContainerHeader = styled.h3`
  padding: 20px;
  font-size: 22px;
  font-weight: 900;
`;

const FilterGrid = styled(Grid)`
  margin-top: 10px;
  gap: 10px;
`;

const RankingContainer = styled.div`
  margin-top: 20px;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  background-color: #fff;
  font-size: 16px;
  color: ${props => (props.active ? '#007bff' : '#333')};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  cursor: pointer;
  transition: color 0.3s;
  outline: none;

  &:hover {
    color: #007bff;
  }
`;
const RankingBox = styled.div`
  padding: 10px;
  background-color: #e0f7fa;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  gap: 10px;
`;

const RankingItem = styled.div<{ active: boolean }>`
  padding: 6px;
  background-color: #e0f7fa;
  color: #007bff;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  text-align: center;
  font-size: 18px;
  cursor: pointer;
`;

  return (
    <div>
      <MainContainer>
        <p>선물 받을 친구를 선택해주세요.</p>
      </MainContainer>
      <Grid columns={4} gap={20}>
        {themes.map((theme) => (
          <ThemeLink key={theme.key} to={`/theme/${theme.key}`}>
            <ThemeItem>
              <ImageContainer>
                <Image src={theme.imgSrc} width="60px" ratio="square" radius={20} />
              </ImageContainer>
              <span>{theme.name}</span>
            </ThemeItem>
          </ThemeLink>
        ))}
      </Grid>
      <RecommendationContainer>
        <RecommendationHeader>AI가 추천하는 선물</RecommendationHeader>
        <p>선물을 추천받고 싶은 친구를 선택해주세요.</p>
      </RecommendationContainer>
      <RankingContainer>
        <RankingContainerHeader>실시간 급상승 선물랭킹</RankingContainerHeader>
        <FilterGrid columns={4} gap={10}>
          <FilterButton
            active={activeFilter === '전체'}
            onClick={() => setActiveFilter('전체')}
          >
            전체
          </FilterButton>
          <FilterButton
            active={activeFilter === '여성이'}
            onClick={() => setActiveFilter('여성이')}
          >
            여성이
          </FilterButton>
          <FilterButton
            active={activeFilter === '남성이'}
            onClick={() => setActiveFilter('남성이')}
          >
            남성이
          </FilterButton>
          <FilterButton
            active={activeFilter === '청소년이'}
            onClick={() => setActiveFilter('청소년이')}
          >
            청소년이
          </FilterButton>
        </FilterGrid>
        <RankingBox>
          {rankingItems.map(item => (
            <RankingItem
              key={item.key}
              active={activeRankingItem === item.key}
              onClick={() => handleRankingItemClick(item.key)}
            >
              {item.name}
            </RankingItem>
          ))}
        </RankingBox>
      </RankingContainer>
    </div>
  );
};

export default Main;
