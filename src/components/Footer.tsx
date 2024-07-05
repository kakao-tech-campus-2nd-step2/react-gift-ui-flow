import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  padding: 28px 16px 88px;
  width: 100%;
  max-width: 100vw;
  background-color: rgb(250, 250, 252);
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  position: fixed;
`;

const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <p>카카오톡 선물하기</p>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
