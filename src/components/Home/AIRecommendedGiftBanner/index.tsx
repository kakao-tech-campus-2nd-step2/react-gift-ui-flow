import styled from '@emotion/styled';

import { Container } from '@/components/common/Layout/Container';

export const AIRecommendedGiftBanner = () => {
  return (
    <AIGiftWrapper>
      <Container maxWidth="1024px">
        <TextWrapper>
          <SubText>AI가 추천하는 선물</SubText>
          <Text>선물을 추천받고 싶은 친구를 선택해주세요.</Text>
        </TextWrapper>
      </Container>
    </AIGiftWrapper>
  );
};

const AIGiftWrapper = styled.section`
  width: 100%;
  height: 150px;
  padding: 40px 20px;
`;
const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #feeb00;
  padding: 20px;
  border-radius: 8px;
  gap: 6px;
`;
const SubText = styled.p`
  font-size: 18px;
  line-height: 14px;
  color: gray;
`;
const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
