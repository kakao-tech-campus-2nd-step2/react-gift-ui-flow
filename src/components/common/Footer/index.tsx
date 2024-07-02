import styled from "@emotion/styled";

import { breakpoints } from "@/styles/variants";

const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <p>카카오톡 선물하기</p>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  background-color: rgb(250, 250, 252);
`;

const InnerWrapper = styled.div`
  width: 1024px;
  padding: 28px 16px 88px;

  @media screen and (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;
