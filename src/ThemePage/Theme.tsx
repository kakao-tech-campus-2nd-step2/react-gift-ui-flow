import styled from '@emotion/styled';
import React from 'react';
import { useParams } from 'react-router-dom';

import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default';
import Header from '@/ThemePage/Header';

import items from '../themeItems';

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
