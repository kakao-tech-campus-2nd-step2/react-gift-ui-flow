import styled from '@emotion/styled';

import { Image } from '@/components/common/Image';
import { breakpoints } from '@/styles/variants';

export const MainMent = () => {
  return (
    <Wrapper>
      <Ment>
        <Image
          src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
          radius={20}
          width={80}
        />
        선물 받을 친구를 선택해주세요.
      </Ment>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: rgb(250, 250, 250);
`;
const Ment = styled.div`
  max-width: ${breakpoints.md};
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 28px;
  padding: 40px 0;
`;
