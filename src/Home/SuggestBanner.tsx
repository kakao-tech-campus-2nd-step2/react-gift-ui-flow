import styled from '@emotion/styled';

import { Container } from '@/components/common/layouts/Container';

export const SuggestBanner = () => {
  return (
    <BannerWrapper>
      <Container>
        <BannerText>
          <Title>AI가 추천하는 선물</Title>
          <Text>선물을 추천받고 싶은 친구를 선택해주세요.</Text>
        </BannerText>
      </Container>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.section`
  padding: 40px;
`;

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #feeb00;
  padding: 20px;
  border-radius: 20px;
`;

const Title = styled.p`
  font-size: 15px;
  color: #00000066;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
