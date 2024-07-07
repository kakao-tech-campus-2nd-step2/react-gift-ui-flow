import styled from '@emotion/styled';

import { Container } from '@/components/common/layouts/Container';

export const AiDiscoveryBanner = () => {
  return (
    <StyledAiDiscoveryBanner>
      <Container>
        <Banner>
          <Label>AI가 추천하는 선물</Label>
          <Title>선물을 추천받고 싶은 친구를 선택해주세요.</Title>
        </Banner>
      </Container>
    </StyledAiDiscoveryBanner>
  );
};

const StyledAiDiscoveryBanner = styled.section`
  padding: 16px;
`;

const Banner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #feeb00;
  padding: 16px;
  border-radius: 8px;
`;

const Label = styled.p`
  font-size: 13px;
  line-height: 15px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.4);
  padding-bottom: 3px;
`;

const Title = styled.h6`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: #000;
`;
