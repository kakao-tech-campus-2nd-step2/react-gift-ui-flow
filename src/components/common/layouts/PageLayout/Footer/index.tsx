import styled from "@emotion/styled";
import COLOR from "@/constants/color";

const Footer = () => {
  return (
    <StyledFooter>카카오 테크 캠퍼스 step2 | 박건규 @geongyu09</StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.GRAY_100};
  height: 16rem;
`;
export default Footer;
