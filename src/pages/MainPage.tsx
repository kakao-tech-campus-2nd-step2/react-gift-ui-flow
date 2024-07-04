import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button/index';
import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';
import { Image } from '@/components/common/Image/index';
import { Grid } from '@/components/common/layouts/Grid/index';

export const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const themes = [
    { name: '생일', key: 'birthday' },
    { name: '스몰럭셔리', key: 'small-luxury' },
    { name: '명품선물', key: 'brand' },
    { name: '가벼운선물', key: 'light-gift' },
    { name: '시원한선물', key: 'cool-gift' },
    { name: '결혼/집들이', key: 'wedding' },
    { name: '응원/시험', key: 'cheerup' },
    { name: '팬심저격', key: 'fan-gift' },
    { name: '교환권', key: 'ecoupon' },
    { name: '건강/비타민', key: 'health' },
    { name: '과일/한우', key: 'fruit-beef' },
    { name: '출산/키즈', key: 'pregnancy' },
  ];

  const ItemsData = [];
  for (let i = 1; i <= 21; i++) {
    ItemsData.push({
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      amount: 29000,
      rankingIndex: i,
    });
  }

  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const [selectedSubFilter, setSelectedSubFilter] = useState<string>('WANT');
  const [visibleItems, setVisibleItems] = useState<number>(6);

  const handleImageClick = () => {
    alert('선물 받을 친구 선택하기');
  };

  const handleItemClick = (themeKey: string) => {
    navigate(`/theme/${themeKey}`);
  };

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  const handleSubFilterClick = (subFilter: string) => {
    setSelectedSubFilter(subFilter);
  };

  const handleShowMore = () => {
    setVisibleItems(ItemsData.length);
  };

  const handleShowLess = () => {
    setVisibleItems(6);
  };

  return (
    <>
      <FriendSection>
        <FriendContainer>
          <FriendImage
            src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
            alt="선물 받을 친구"
            radius={25}
            ratio="square"
            onClick={handleImageClick}
          />
          <FriendText>선물 받을 친구를 선택해주세요.</FriendText>
        </FriendContainer>
      </FriendSection>
      <ThemeSection>
        <Grid columns={{ sm: 3, md: 4, lg: 6 }} gap={20}>
          {themes.map((theme, index) => (
            <Item key={index} onClick={() => handleItemClick(theme.key)}>
              <ThemeImage
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt={theme.name}
                radius={30}
                ratio="square"
              />
              <ItemName>{theme.name}</ItemName>
            </Item>
          ))}
        </Grid>
      </ThemeSection>
      <AISection>
        <AIButton theme="kakao" size="large">
          <p>AI가 추천하는 선물</p>
          <h3>선물을 추천받고 싶은 친구를 선택해주세요.</h3>
        </AIButton>
      </AISection>
      <RankingSection>
        <RankingName>실시간 급상승 선물랭킹</RankingName>
        <FilterContainer>
          <FilterButton
            className={selectedFilter === 'ALL' ? 'active' : ''}
            onClick={() => handleFilterClick('ALL')}
          >
            <div>ALL</div>
            <p>전체</p>
          </FilterButton>
          <FilterButton
            className={selectedFilter === 'WOMEN' ? 'active' : ''}
            onClick={() => handleFilterClick('WOMEN')}
          >
            <div>👩🏻‍🦳</div>
            <p>여성이</p>
          </FilterButton>
          <FilterButton
            className={selectedFilter === 'MEN' ? 'active' : ''}
            onClick={() => handleFilterClick('MEN')}
          >
            <div>👨🏻‍🦳</div>
            <p>남성이</p>
          </FilterButton>
          <FilterButton
            className={selectedFilter === 'YOUTH' ? 'active' : ''}
            onClick={() => handleFilterClick('YOUTH')}
          >
            <div>👦🏻</div>
            <p>청소년이</p>
          </FilterButton>
        </FilterContainer>
        <SubFilterContainer>
          <SubFilterButton
            className={selectedSubFilter === 'WANT' ? 'active' : ''}
            onClick={() => handleSubFilterClick('WANT')}
          >
            받고 싶어한
          </SubFilterButton>
          <SubFilterButton
            className={selectedSubFilter === 'GIVEN' ? 'active' : ''}
            onClick={() => handleSubFilterClick('GIVEN')}
          >
            많이 선물한
          </SubFilterButton>
          <SubFilterButton
            className={selectedSubFilter === 'WISH' ? 'active' : ''}
            onClick={() => handleSubFilterClick('WISH')}
          >
            위시로 받은
          </SubFilterButton>
        </SubFilterContainer>
        <ItemContainer>
          <Grid columns={{ sm: 3, md: 4, lg: 6 }} gap={20}>
            {ItemsData.slice(0, visibleItems).map((item, index) => (
              <RankingGoodsItems key={index} {...item} />
            ))}
          </Grid>
        </ItemContainer>
        <ButtonContainer>
          {visibleItems < ItemsData.length ? (
            <Button theme="outline" onClick={handleShowMore}>
              더보기
            </Button>
          ) : (
            <Button theme="outline" onClick={handleShowLess}>
              접기
            </Button>
          )}
        </ButtonContainer>
      </RankingSection>
    </>
  );
};

const FriendSection = styled.section`
  display: flex;
  justify-content: center;
  background-color: #fafafa;
  padding: 40px;
`;

const FriendContainer = styled.div`
  display: flex;
  max-width: 1024px;
  align-items: center;
  width: 100%;
`;

const FriendImage = styled(Image)`
  cursor: pointer;
  max-width: 70px;
  max-height: 70px;
`;

const FriendText = styled.span`
  font-size: 28px;
  color: black;
  margin-left: 20px;
`;

const ThemeSection = styled.section`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
`;

const ThemeImage = styled(Image)`
  max-width: 100px;
  max-height: 100px;
`;

const ItemName = styled.span`
  margin-top: 10px;
  font-size: 16px;
  color: black;
`;

const AISection = styled.section`
  display: flex;
  justify-content: center;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

const AIButton = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
  padding: 10px;

  & > p {
    font-size: 16px;
    color: gray;
  }

  & > h3 {
    font-size: 18px;
    color: black;
    font-weight: bold;
  }
`;

const RankingSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  width: 100%;
  margin: 80px auto;
  padding: 40px;
`;

const RankingName = styled.h2`
  font-size: 36px;
  font-weight: bold;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
  gap: 50px;
`;

const FilterButton = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  padding: 0 50px;
  border: none;
  outline: none;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    padding: 20px 0;
    cursor: pointer;
    border-radius: 40%;
    background-color: #e6f1ff;
    font-size: 24px;
    font-weight: bold;
    color: white;
  }

  & > p {
    color: gray;
    font-size: 20px;
    margin-top: 10px;
  }

  &.active > div {
    background-color: #4684e9;
    transition: background-color 0.3s;
  }

  &.active > p {
    color: #4684e9;
    font-weight: bold;
  }

  &:hover {
    background: none;
    border: none;
  }
`;

const SubFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e6f1ff;
  border-radius: 10px;
  width: 100%;
  max-width: 1024px;
  height: 70px;
  align-items: center;
  margin: 0 auto 40px;
`;

const SubFilterButton = styled(Button)`
  background: none;
  border: none;
  color: #4684e9;
  cursor: pointer;
  outline: none;
  font-size: 24px;
  width: 200px;

  &:hover {
    background: none;
    border: none;
  }

  &.active {
    background: none;
    color: #4684e9;
    font-weight: bold;
    outline: none;
  }
`;

const ItemContainer = styled.div`
  margin: 0 auto 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
`;
