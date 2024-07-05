import styled from '@emotion/styled';
export const AiReference = () => {
  return (
    <Wrapper>
        <Banner>
          <Label>AI가 추천하는 선물</Label>
          <Title>선물을 추천받고 싶은 친구를 선택해주세요.</Title>
        </Banner>
    </Wrapper>
  );
};

export default AiReference;
const Wrapper = styled.section`
  padding: 20px;
`;

const Banner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #feeb00;
  padding: 16px;
  border-radius: 8px;

`;

const Label = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.4);
  padding-bottom: 3px;

`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #000;
`;
