import styled from '@emotion/styled';

const Footer = () => {
    return (
      <FooterContainer>
        <Text>카카오톡 선물하기</Text>
      </FooterContainer>
    );
  };

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #f8f9fa;
  border-top: 1px solid #e0e0e0;
`;

const Text = styled.p`
  font-size: 16px;
  color: #333;
`;

export default Footer;