import styled from '@emotion/styled';
import Container from '@components/Layout/Container/Container';

const FriendSelection = () => {
  const handleImageClick = () => {
    alert('선물 받을 친구를 선택하세요.');
  };

  return (
    <Container>
      <ContentWrapper>
        <ImageContainer onClick={handleImageClick}>
          <Image src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png" alt="선물 받을 친구" />
        </ImageContainer>
        <Text>선물 받을 친구를 선택해주세요.</Text>
      </ContentWrapper>
    </Container>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Text = styled.p`
  font-size: 18px;
  color: #333;
`;

export default FriendSelection;