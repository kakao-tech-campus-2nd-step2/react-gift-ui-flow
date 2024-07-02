import styled from '@emotion/styled';

import InnerStyle from '@/styles/innerStyle';

const StyledFooter = styled.footer`
  padding: 28px 16px 88px;
  width: 100%;
  max-width: 100vw;
  background-color: rgb(250, 250, 252);
`;

const StyledP = styled(InnerStyle)`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledP>
        <p>카카오톡 선물하기</p>
      </StyledP>
    </StyledFooter>
  );
};

export default Footer;
