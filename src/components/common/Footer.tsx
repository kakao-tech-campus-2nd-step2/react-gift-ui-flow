import styled from '@emotion/styled';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>카카오톡 선물하기</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  padding: 10px; /* 적절한 패딩 */
  text-align: center; /* 텍스트 가운데 정렬 */
  p {
    margin: 5px 0; /* 적절한 마진 */
    color: black; /* 텍스트 색상 */
  }
`;
