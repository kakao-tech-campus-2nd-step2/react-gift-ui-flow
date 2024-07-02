import styled from '@emotion/styled';

import { Button } from '@/components/common/Button';
import { breakpoints } from '@/styles/variants';

export const Badge = () => {
  return (
    <Wrapper>
      <Button
        style={{
          padding: '10px 0',
          cursor: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
        }}
      >
        <Subtitle>AI가 추천하는 선물</Subtitle>
        <Maintitle>선물을 추천받고 싶은 친구를 선택해주세요.</Maintitle>
      </Button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: ${breakpoints.md};
  margin: 0 auto;
`;
const Subtitle = styled.div`
  color: gray;
`;
const Maintitle = styled.div`
  font-weight: bold;
`;
