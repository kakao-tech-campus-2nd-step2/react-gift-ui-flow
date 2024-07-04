import styled from "@emotion/styled"

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterText>
        카카오톡 선물하기
        <br />
        Designed by Joshua
      </FooterText>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100vw;
  height: auto;
  background-color: #efefef;
`

const FooterText = styled.p`
  font-size: 2rem;
  text-align: center;
`;

export default Footer;

