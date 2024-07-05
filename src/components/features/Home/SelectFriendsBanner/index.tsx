import styled from '@emotion/styled';

import { Image } from '@/components/common/Image';
import { Container as CommonContainer } from '@/components/common/layouts/Container';

export const SelectFriendsBanner = () => (
  <StyledSelectFriendsBanner>
    <Container flexDirection="row" alignItems="center">
      <SelectImage
        src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
        alt="친구 선택 유도 아이콘"
      />
      <Text>선물 받을 친구를 선택해주세요.</Text>
    </Container>
  </StyledSelectFriendsBanner>
);

const StyledSelectFriendsBanner = styled.section`
  width: 100%;
  height: 76px;
  padding: 18px 16px;

  background: #fafafa;
`;

const Container = styled(CommonContainer)`
  height: 100%;
`;

const SelectImage = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 16px;
  cursor: pointer;
`;

const Text = styled.p`
  padding-left: 16px;
  font-size: 17px;
  line-height: 22px;
  color: #333;
  font-weight: 500;
`;
