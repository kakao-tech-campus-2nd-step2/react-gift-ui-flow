import styled from '@emotion/styled';

import InnerStyle from '@/styles/innerStyle';

const StyledFooter = styled.footer`
  padding: 40px 16px 120px;
  width: 100%;
  max-width: 100vw;
  background-color: rgb(250, 250, 252);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledP = styled(InnerStyle)`
  display: flex;
  flex-direction: column;
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
