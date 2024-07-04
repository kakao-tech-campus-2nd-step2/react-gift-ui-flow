import styled from "@emotion/styled";

const Footer = () => {
  return (
    <StyledFooter>카카오 테크 캠퍼스 step2 | 박건규 @geongyu09</StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  height: 16rem;
`;
export default Footer;
