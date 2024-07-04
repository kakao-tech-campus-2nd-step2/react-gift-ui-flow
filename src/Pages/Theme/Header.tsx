import styled from '@emotion/styled';

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Label>가벼운 선물</Label>
        <Title>예산은 가볍게, 감동은 무겁게❤️</Title>
        <Description>당신의 센스를 뽐내줄 부담 없는 선물</Description>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  background-color: rgb(75, 77, 80);
  padding: 50px 20px;
`;
const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const Label = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
`;
const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 10px;
  font-weight: bold;
  color: rgb(255, 255, 255);
`;
const Description = styled.p`
  font-size: 20px;
  color:rgba(255, 255, 255, 0.55);
`;