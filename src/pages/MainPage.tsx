import styled from '@emotion/styled';

import { Image } from '@/components/common/Image/index';

export const MainPage: React.FC = () => {
  return (
    <>
      <FriendSection>
        <FriendContainer>
          <FriendImage
            src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
            alt="선물 받을 친구"
            radius={25}
            ratio="square"
          />
          <FriendText>선물 받을 친구를 선택해주세요.</FriendText>
        </FriendContainer>
      </FriendSection>
    </>
  );
};

const FriendSection = styled.section``;

const FriendContainer = styled.div``;

const FriendImage = styled(Image)``;

const FriendText = styled.span``;
