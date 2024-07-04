import styled from '@emotion/styled'

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <FooterContainer>
        <FooterInner className='inner'>
          <FooterLogo src="https://img1.kakaocdn.net/thumb/C140x20@2x.fwebp.q82/?fname=https%3A%2F%2Fgift-s.kakaocdn.net%2Fdn%2Fgift%2Fimages%2Fm640%2Fpc_smallbi_201223.png" alt="카카오톡 선물하기 로고2" />
        </FooterInner>
      </FooterContainer>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  padding: 28px 16px 88px;
  background-color: rgb(250, 250, 252);

  @media screen and (min-width: 768px) {
    padding: 40px 16px 120px;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterInner = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;  
`;

const FooterLogo = styled.img`
  height: 20px;
`;