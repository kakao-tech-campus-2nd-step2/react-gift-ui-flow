import styled from '@emotion/styled';

const FooterWrapper = styled.footer`
  position: relative; /* 고정 위치로 설정하여 항상 하단에 고정 */
  bottom: 0; /* 하단에 고정 */
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; /* 좌우 패딩 추가 */
  background-color: rgb(250, 250, 252); /* 배경색 설정 */
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <h3>카카오톡 선물하기</h3>
    </FooterWrapper>
  );
};

export default Footer;
