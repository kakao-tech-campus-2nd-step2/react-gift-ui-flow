import styled from '@emotion/styled';

const Footer = () => {
  return <FooterContainer>카카오톡 선물하기</FooterContainer>;
};

export default Footer;

const FooterContainer = styled.footer`
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-top: 1px solid #eaeaea;
  font-size: 14px;
  color: #333;
`;
