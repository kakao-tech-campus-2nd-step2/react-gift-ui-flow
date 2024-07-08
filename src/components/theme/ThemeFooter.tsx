import styled from '@emotion/styled'

const ThemeFooter: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <InnerContainer className='inner'>
          <Paragraph>AI가 추천하는 선물</Paragraph>
          <StyledHeadingTag>선물을 추천받고 싶은 친구를 선택해주세요.</StyledHeadingTag>
        </InnerContainer>
      </Container>
    </Wrapper>
  )
}

export default ThemeFooter

const Wrapper = styled.section`
  padding: 24px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(254, 235, 0);
  padding: 16px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const Paragraph = styled.p`
  font-size: 13px;
  line-height: 15px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.4);
  padding-bottom: 3px;

  @media screen and (min-width: 768px) { 
    font-size: 17px;
    line-height: 19px;
    padding-bottom: 5px;
  }
`;

const StyledHeadingTag = styled.h6`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: rgb(0, 0, 0);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 20px;
  }  
`;
