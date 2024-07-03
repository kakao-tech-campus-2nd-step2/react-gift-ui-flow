import styled from '@emotion/styled';
import React from 'react';

import Body from '@/components/Body';
import { Header } from '@/components/common/Header/Header';
import Footer from '@/components/Footer';

const MainPage: React.FC = () => {
  return (
    <PageContainer>
      <Header label="/login" title="선물하기" description="로그인" backgroundColor="#FFF" />
      <Body />
      <Footer />
    </PageContainer>
  );
};

export default MainPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1024px;
  min-height: 100vh;
  background: rgb(250, 250, 250);
`;
