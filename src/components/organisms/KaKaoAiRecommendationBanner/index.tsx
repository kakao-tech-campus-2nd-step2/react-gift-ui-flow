import styled from '@emotion/styled';

import { ParagraphHeadingDownBanner } from '@/components/molecules/ParagraphHeadingDownBanner';

const h6 = 6;
const hContent = '선물을 추천받고 싶은 친구를 선택해주세요.';
const pContent = 'AI가 추천하는 선물';

export const KaKaoAiRecommendation = () => {
  return (
    <Padding>
      <KaKaoWrapper>
        <ParagraphHeadingDownBanner hNum={h6} hContent={hContent} pContent={pContent} />
      </KaKaoWrapper>
    </Padding>
  );
};

const Padding = styled.section`
  padding: 16px;
`;

const KaKaoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #feeb00;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
`;
