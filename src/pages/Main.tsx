import styled from '@emotion/styled';

import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/layouts/Container';
import { SelectFriend } from '@/components/mainPage/SelectFriend';
import { ThemeMenu } from '@/components/mainPage/ThemeGrid';
import TrendGiftRanking from '@/components/mainPage/TrendGiftRanking';

const AiSuggestButton = styled(Button)`
  flex-direction: column;
  margin: 16px 0 16px 0;
  padding: 16px 0 16px 0;
  width: 100%;
  border-radius: 8px;
  p {
    color: rgba(0, 0, 0, 0.4);
  }
  h3 {
    font-weight: 700;
  }
`;

const Wrapper = styled.div`
  height: auto;
  min-height: 100%;
  left: 0;
  right: 0;
  top: 58px;
`;

export const MainPage = () => {
  return (
    <Wrapper>
      <SelectFriend />
      <ThemeMenu />
      <Container>
        <AiSuggestButton>
          <p>AI가 추천하는 선물</p>
          <h3>선물을 추천받고 싶은 친구를 선택해주세요.</h3>
        </AiSuggestButton>
      </Container>
      <div style={{ height: '120px' }} />
      <TrendGiftRanking />
    </Wrapper>
  );
};

export default MainPage;
