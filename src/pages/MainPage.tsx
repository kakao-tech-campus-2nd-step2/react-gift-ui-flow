import styled from '@emotion/styled';

import { Image } from '@/components/common/Image/index';

export const MainPage: React.FC = () => {
  const handleImageClick = () => {
    alert('선물 받을 친구 선택하기');
  };

  return (
    <>
      <FriendSection>
        <FriendContainer>
          <FriendImage
            src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
            alt="선물 받을 친구"
            radius={25}
            ratio="square"
            onClick={handleImageClick}
          />
          <FriendText>선물 받을 친구를 선택해주세요.</FriendText>
        </FriendContainer>
      </FriendSection>
    </>
  );
};

const FriendSection = styled.section`
  display: flex;
  justify-content: center;
  background-color: #fafafa;
  padding: 40px;
`;

const FriendContainer = styled.div`
  display: flex;
  max-width: 1024px;
  align-items: center;
  width: 100%;
`;

const FriendImage = styled(Image)`
  cursor: pointer;
  max-width: 70px;
  max-height: 70px;
`;

const FriendText = styled.span`
  font-size: 28px;
  color: black;
  margin-left: 20px;
`;
