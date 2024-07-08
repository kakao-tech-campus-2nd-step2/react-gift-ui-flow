import styled from '@emotion/styled';

const FriendSelection = () => {
  return (
      <ContentWrapper>
        <Text>AI가 추천하는 선물</Text>
        <PrimaryText>선물을 추천받고 싶은 친구를 선택해주세요.</PrimaryText>
      </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  background-color: #ffeb3b;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Text = styled.p`
  font-size: 12px;
  color: gray;
  margin-bottom: 6px;
`;

const PrimaryText = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export default FriendSelection;