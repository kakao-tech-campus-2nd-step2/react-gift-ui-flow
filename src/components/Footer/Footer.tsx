import styled from '@emotion/styled';

const FooterWrapper = styled.footer`
  position: sitcky;
  bottom: 0; /* 페이지 하단에 고정 */
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  background-color: #fdf5e6;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div>카카오톡 선물하기</div>
    </FooterWrapper>
  );
};

export default Footer;
