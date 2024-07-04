import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  background-color: #f2f2f2;
  padding: 20px;
  text-align: flex-start;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>카카오톡 선물하기</p>
    </StyledFooter>
  );
};

export default Footer;
