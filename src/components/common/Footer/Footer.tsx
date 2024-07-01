import styled from '@emotion/styled';
import React from 'react';

const Footer: React.FC = () => {
  return <FooterContainer>카카오톡 선물하기</FooterContainer>;
};

// 푸터 컨테이너 스타일 설정
const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  border-top: 1px solid #e0e0e0;
  font-size: 14px;
  color: #333;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

export default Footer;
