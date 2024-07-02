import styled from '@emotion/styled';
import { Image } from './Image';
export default function ChooseFriend() {
  const handleImgClick = () => {
    alert('선물 받을 친구 선택하기');
  };

  return (
    <ChooseFriendWrapper>
      <ChooseFriendContainer>
        <ChooseFriendContent>
          <Image
            radius={24}
            ratio="square"
            src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
            alt="친구선택유도 아이콘"
            width="70px"
            height="70px"
            onClick={handleImgClick}
          />
          <ChooseFriendText>선물 받을 친구를 선택해주세요.</ChooseFriendText>
        </ChooseFriendContent>
      </ChooseFriendContainer>
    </ChooseFriendWrapper>
  );
}

const ChooseFriendWrapper = styled.section`
  margin-top: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  height: 150px;
  backgorund-color: rgb(250, 250, 250);
`;

const ChooseFriendContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(250, 250, 250);
`;

const ChooseFriendContent = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const ChooseFriendText = styled.p`
  font-size: 28px;
  font-weight: 400;
  line-height: 35px;
  margin-left: 20px;
`;
