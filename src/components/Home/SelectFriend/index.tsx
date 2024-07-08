import styled from '@emotion/styled';

import { Image } from '@/components/common/Image';
import { Container } from '@/components/common/Layout/Container';

export const SelectFriend = () => {
  return (
    <FriendWrapper>
      <Container flexDirection="row" alignItems="center" maxWidth="1024px">
        <ImageCustom
          src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
          alt="친구 선택"
          radius={24}
          ratio={'square'}
          onClick={() => alert('선물 받을 친구 선택하기')}
        />
        <Text>선물 받을 친구를 선택해주세요.</Text>
      </Container>
    </FriendWrapper>
  );
};
const FriendWrapper = styled.section`
  width: 100%;
  height: 150px;
  background-color: rgb(250, 250, 250);
  padding: 40px 20px;

  @media screen and (max-width: 768px) {
    height: 100px;
    padding: 27px 20px;
  }
`;
const ImageCustom = styled(Image)`
  width: 70px;
  height: 70px;
  margin-right: 16px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 46px;
    height: 46px;
    border-radius: 18px;
  }
`;
const Text = styled.p`
  font-size: 28px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
