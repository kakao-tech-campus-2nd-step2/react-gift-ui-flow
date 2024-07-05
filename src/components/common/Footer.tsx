import styled from '@emotion/styled';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>AI 선물탐험</p>
      <p>취향저격 선물을 찾아 떠나는 모험</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: yellow; /* 노란색 배경 */
  padding: 10px; /* 적절한 패딩 */
  text-align: center; /* 텍스트 가운데 정렬 */
  p {
    margin: 5px 0; /* 적절한 마진 */
    color: black; /* 텍스트 색상 */
  }
`;
