import styled from '@emotion/styled';

export const FriendBanner = () => (
  <BannerWrapper>
    <BannerContainer>
      <SelectIcon
        src="/images/profile.png"
        alt="ProfileImage"
        onClick={() => {
          alert('선물 받을 친구 선택하기');
        }}
      />
      <BannerText>선물 받을 친구를 선택해주세요.</BannerText>
    </BannerContainer>
  </BannerWrapper>
);

export default FriendBanner;

const BannerWrapper = styled.section`
  width: 100%;
  height: 130px;
  padding: 10px 16px;
  background: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerContainer = styled.div`
  display: flex;
  width: 1160px;
  align-items: center;
  flex-direction: row;
`;

const SelectIcon = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 25%;
  cursor: pointer;
`;

const BannerText = styled.p`
  margin-left: 20px;
  font-size: 30px;
  line-height: 37px;
  color: #333;
  font-weight: 500;
`;
