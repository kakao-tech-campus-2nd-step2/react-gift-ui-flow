import styled from '@emotion/styled';
import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '@/ThemePage/Header';

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
      </ContentWrapper>
    </PageWrapper>
  );
};

export default ThemePage;
