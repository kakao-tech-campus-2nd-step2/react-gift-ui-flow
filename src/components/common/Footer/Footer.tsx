import styled from '@emotion/styled';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>카카오톡 선물하기</FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  background-color: #fafafa;
  height: 175px;
`;

const FooterContent = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding-top: 40px;
`;

const FooterText = styled.p`
  color: #000000;
  font-size: 16px;
`;
