import styled from '@emotion/styled';

import { Container } from '@/components/common/layouts/Container';
import { breakpoints } from '@/styles/variants';

import { GiftCategories } from './Categories/GiftCategories';
import { WhoCategories } from './Categories/WhoCategories';

export const RankingSection = () => (
  <SectionWrapper>
    <Container maxWidth="1024px">
      <Title>실시간 급상승 선물랭킹</Title>
      <ContentWrapper>
        <WhoCategories />
        <Space />
        <GiftCategories />
      </ContentWrapper>
    </Container>
  </SectionWrapper>
);

const Title = styled.h2`
  @media screen and (min-width: ${breakpoints.sm}) {
    text-align: center;
    font-size: 35px;
    line-height: 50px;
  }
  width: 100%;
  font-weight: 700;
`;

const SectionWrapper = styled.section`
  padding: 0px 16px 32px;

  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 0px 16px 80px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 20px 0px 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Space = styled.div`
  width: 100%;
  background-color: inherit;
  height: 16px;
`;
