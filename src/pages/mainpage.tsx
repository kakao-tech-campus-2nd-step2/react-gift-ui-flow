import styled from '@emotion/styled';
import React, { useState } from 'react';

import { Button } from '../components/common/Button';
import Footer from '../components/common/Footer';
import { RankingGoodsItems } from '../components/common/GoodsItem/Ranking';
import Header from '../components/common/Header';
import { Grid } from '../components/common/layouts/Grid';
import ThemeItem from '../components/common/ThemeItem';

const MainPage: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const handleFilterClick = (category: string) => {
    setFilterCategory(category);
  };

  const handleShowMoreClick = () => {
    setShowAll(!showAll);
  };

  const items = [
    { id: 1, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', type: 'all', amount: 29000, imgSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 2, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', type: 'women', amount: 29000, imgSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 3, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', type: 'men', amount: 29000, imgSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 4, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', type: 'youth', amount: 29000, imgSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 5, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', type: 'all', amount: 29000, imgSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 6, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', type: 'women', amount: 29000, imgSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
  ];

  const filteredItems = items.filter(item => filterCategory === 'all' || item.type === filterCategory);
  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <Container>
      <Header />
      <Content>
        <ProfileSection>
          <ProfileImage src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png" alt="친구 선택 유도 아이콘" />
          <ProfileText>선물 받을 친구를 선택해주세요.</ProfileText>
        </ProfileSection>
        <ThemeGrid>
          {['생일', '졸업선물', '스몰럭셔리', '명품선물', '결혼/집들이', '따뜻한선물', '가벼운선물', '팬심저격', '교환권', '건강/비타민', '과일/한우', '출산/키즈'].map((theme, index) => (
            <ThemeItem key={index} themeKey="life_small_gift" imageSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png" label={theme} />
          ))}
        </ThemeGrid>
        <HighlightSection>
          <HighlightText>AI가 추천하는 선물</HighlightText>
          <HighlightDescription>선물을 추천받고 싶은 친구를 선택해주세요.</HighlightDescription>
        </HighlightSection>
        <Section>
          <SubTitle>실시간 급상승 선물랭킹</SubTitle>
          <Filter>
          <FilterContainer>
              <FilterButton onClick={() => handleFilterClick('all')}>
                <FilterButtonIcon>ALL</FilterButtonIcon>
                <FilterButtonText>전체</FilterButtonText>
              </FilterButton>
              <FilterButton onClick={() => handleFilterClick('women')}>
                <FilterButtonIcon>👩🏻‍🦳</FilterButtonIcon>
                <FilterButtonText>여성이</FilterButtonText>
              </FilterButton>
              <FilterButton onClick={() => handleFilterClick('men')}>
                <FilterButtonIcon>👨🏻‍🦳</FilterButtonIcon>
                <FilterButtonText>남성이</FilterButtonText>
              </FilterButton>
              <FilterButton onClick={() => handleFilterClick('youth')}>
                <FilterButtonIcon>👦🏻</FilterButtonIcon>
                <FilterButtonText>청소년이</FilterButtonText>
              </FilterButton>
            </FilterContainer>
            <SubFilterContainer>
              <SubFilterButton>받고 싶어한</SubFilterButton>
              <SubFilterButton>많이 선물한</SubFilterButton>
              <SubFilterButton>위시로 받은</SubFilterButton>
            </SubFilterContainer>
          </Filter>
          <Grid columns={{ sm: 2, md: 4, lg: 6 }} gap={16}>
            {displayedItems.map((item, index) => (
              <RankingGoodsItems
                key={item.id}
                rankingIndex={index + 1}
                imageSrc={item.imgSrc}
                subtitle="BBQ"
                title={item.name}
                amount={item.amount}
              />
            ))}
          </Grid>
          <MoreButton onClick={handleShowMoreClick}>
            {showAll ? '접기' : '더보기'}
          </MoreButton>
        </Section>
      </Content>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding-top: 54px; // 헤더 높이
`;

const Content = styled.div`
  padding: 0px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  background-color: #FAFAFA;
  padding: 40px 16px;
`;

const ProfileImage = styled.img`
  margin-left: 60px;
  width: 70px;
  height: 70px;
  border-radius: 24px;
  margin-right: 20px;
`;

const ProfileText = styled.p`
  font-size: 28px;
  font-weight: 500;
  line-height: 35px;
  color: #000;
`;

const ThemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  padding: 45px 52px 23px;
  margin-top : 10px;
  justify-content: center;
  margin-bottom: 40px;
`;

const HighlightSection = styled.div`
  max-width: 1000px;
  background-color: #FEEB00;
  padding: 13px;
  text-align: center;
  border-radius: 8px;
  margin: 0 auto;
`;

const HighlightText = styled.p`
  font-size: 17px;
  color: rgba(0, 0, 0, 0.4);
  padding: 0 0 5px;
`;

const HighlightDescription = styled.h6`
  font-weight: bold;
  font-size: 18px;
  margin-top: 0px;
  
`;

const Section = styled.section`
  margin-top: 130px;
  margin-bottom: 40px;
`;

const SubTitle = styled.h2`
  font-size: 35px;
  font-weight: bold;
  line-height: 50px;
  text-align: center;
  margin-bottom: 20px;
`;

const Filter= styled.div`
  padding: 20px 0px 7px;
  width: 100%;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

const FilterButton = styled.button`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  min-width: 90px;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
`;

const FilterButtonIcon = styled.span`
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;  
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  border-radius: 24px;
  background-color: #E6F1FF
`;

const FilterButtonText = styled.span`
  margin-top:10px;
  padding: 10px 0 6px;
  font-size: 20px;
  color: #666;
`;

const SubFilterContainer = styled.div`
  display: flex;
  gap: 30px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: #E6F1FF;
  boder-radius: 12px;
  max-width: 1024px;
  margin : 0 auto;
`;

const SubFilterButton = styled.button`
  padding: 20px 30px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 22px;
  line-height: 22px;
  font-weight: 400;
  color: #4684E9B3;
`;

const MoreButton = styled(Button)`
  max-width: 480px;
  height: 60px;
  font-size:16px;
  border: .1px solid #111;
  border-radius: 4px;
  background-color: #FFF;
  margin: 30px auto 80px auto;
`;

export default MainPage;
