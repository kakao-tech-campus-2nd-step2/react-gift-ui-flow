import styled from '@emotion/styled';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <TextContainer>카카오톡 선물하기</TextContainer>
    </FooterContainer>
  );
};

// 푸터 컨테이너 스타일 설정
const FooterContainer = styled.div`
  align-items: center;
  background-color: #f5f5f5;
  padding: 50px 14vh;
  font-size: 14px;
  color: #333;
  // position: fixed;
  bottom: 0;
`;

const TextContainer = styled.div`
  align-items: center;
  justify-content: flex-start;
  width: 33.33%;
  footer width
`;

export default Footer;
