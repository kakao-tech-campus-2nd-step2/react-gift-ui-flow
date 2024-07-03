import styled from '@emotion/styled';

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <TextContainer className="inner">
          <p>카카오톡 선물하기</p>
        </TextContainer>
      </FooterContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  padding: 28px 16px 88px;
  width: 100%;
  max-width: 100vw;
  background-color: rgb(250, 250, 252);
`;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  align-items: flex-start;
`;
