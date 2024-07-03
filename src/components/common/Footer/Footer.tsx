import styled from '@emotion/styled';
// import { useNavigate } from 'react-router-dom';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>카카오톡 선물하기</FooterContent>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  bottom: 0;
  align-items: center;
  width: 100vw;
  height: 137px;
  background-color: #fff;
  unicode-bidi: isolate;
  background-color: rgb(250, 250, 252);
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 21px;
  padding: 28px 16px 88px;
`;
