import styled from '@emotion/styled';
import React from 'react';
import { useParams } from 'react-router-dom';

import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default';
import Header from '@/ThemePage/Header';

type GoodsItem = {
  key: string;
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
};

const PageWrapper = styled.div`
  background-color: #f0f0f0;
  min-height: 100vh;
`;

const HeaderWrapper = styled.div`
  background-color: #333;
`;

const ContentWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
`;

const TitleWrapper = styled.div`
  margin-bottom: 8px;
`;

const GoodsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const ThemePage: React.FC = () => {
  const { themeKey } = useParams<{ themeKey: string }>();
  
  const items: GoodsItem[] = [
    { key: 'item1', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item2', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item3', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item4', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item5', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item6', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item7', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item8', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item9', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item10', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item11', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item12', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item13', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item14', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item15', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item16', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item17', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item18', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item19', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item20', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item21', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  ];

  return (
    <PageWrapper>
      <HeaderWrapper>
        <Header themeKey={themeKey || 'default'} />
      </HeaderWrapper>
      <ContentWrapper>
        <TitleWrapper>
          {/* 테마에 대한 추가 정보 표시 */}
        </TitleWrapper>
        <GoodsListWrapper>
          {items.map((item, index) => (
            <DefaultGoodsItems
              key={index}
              imageSrc={item.imageSrc}
              subtitle={item.subtitle}
              title={item.title}
              amount={item.amount}
            />
          ))}
        </GoodsListWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default ThemePage;
