import styled from '@emotion/styled';
import React from 'react';

import { RankingGoodsItems } from '../GoodsItem/Ranking';

const items = [
  {
    id: 1,
    imageSrc:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    subtitle: 'BBQ',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    amount: 29000,
  },
  {
    id: 2,
    imageSrc:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    subtitle: 'BBQ',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    amount: 29000,
  },
  {
    id: 3,
    imageSrc:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    subtitle: 'BBQ',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    amount: 29000,
  },
  {
    id: 4,
    imageSrc:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    subtitle: 'BBQ',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    amount: 29000,
  },
  {
    id: 5,
    imageSrc:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    subtitle: 'BBQ',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    amount: 29000,
  },
  {
    id: 6,
    imageSrc:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    subtitle: 'BBQ',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    amount: 29000,
  },
  {
    id: 7,
    imageSrc:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    subtitle: 'BBQ',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    amount: 29000,
  },
  {
    id: 8,
    imageSrc:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    subtitle: 'BBQ',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    amount: 29000,
  },
];

const StyledSection4Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h2 {
    color: rgb(0, 0, 0);
    width: 100%;
    text-align: center;
    font-size: 30px;
    line-height: 30px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

const BoxContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Box = styled.section`
  width: 100%;
  min-width: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > button {
    width: 44px;
    height: 44px;
    border-radius: 16px;
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 700;
    background-color: rgb(70, 132, 233);
    transition: background-color 200ms ease 0s;

    &:not(.isActive) {
      background-color: rgb(230, 241, 255);
    }

    &:hover {
      background-color: rgb(70, 132, 233);
      color: rgb(255, 255, 255);
    }
  }

  & > p {
    padding: 5px 0px;
    font-size: 14px;
    line-height: 16px;
    color: rgb(102, 102, 102);
    font-weight: 400;
    transition:
      color 200ms ease 0s,
      font-weight 200ms ease 0s;

    &:hover {
      color: rgb(70, 132, 233);
      font-weight: 400;
    }
  }
`;

const ItemContainer = styled.section`
  width: 95%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

const BtnContainer = styled.section`
  width: 80%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid rgba(70, 132, 233, 0.1);
  background-color: rgb(230, 241, 255);
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 30px;

  & > button {
    padding: 13px 20px;
    font-size: 16px;
    line-height: 16px;
    color: rgb(70, 132, 233);
    font-weight: 700;
    transition:
      color 200ms ease 0s,
      font-weight 200ms ease 0s;
  }
`;

const MoreBtn = styled.section`
  width: 50%;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  margin-bottom: 50px;
  & > button {
    width: 100%;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 200ms ease 0s;
    height: 40px;
    font-size: 15px;
    box-shadow: rgb(204, 204, 204) 0px 0px 0px 1px inset;
    color: rgb(17, 17, 17);
    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

const Section4: React.FC = () => {
  return (
    <StyledSection4Container>
      <h2>실시간 급상승 선물랭킹</h2>
      <BoxContainer>
        <Box>
          <button>ALL</button>
          <p>전체</p>
        </Box>
        <Box>
          <button>👩🏻‍🦳</button>
          <p>여성이</p>
        </Box>
        <Box>
          <button>👨🏻‍🦳</button>
          <p>남성이</p>
        </Box>
        <Box>
          <button>👦🏻</button>
          <p>청소년이</p>
        </Box>
      </BoxContainer>
      <BtnContainer>
        <button>받고 싶어한</button>
        <button>많이 선물한</button>
        <button>위시로 받은</button>
      </BtnContainer>
      <ItemContainer>
        {items.map((item, index) => (
          <RankingGoodsItems
            key={item.id}
            rankingIndex={index + 1}
            imageSrc={item.imageSrc}
            subtitle={item.subtitle}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </ItemContainer>
      <MoreBtn>
        <button>더보기</button>
      </MoreBtn>
    </StyledSection4Container>
  );
};

export default Section4;
