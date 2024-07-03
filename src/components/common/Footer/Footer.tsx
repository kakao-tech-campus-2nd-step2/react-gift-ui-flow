import styled from '@emotion/styled';
import React from "react";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 30px 20px;
  width: 100%;
  height: 150px;
  background-color: #f5f5f5;
`;

const Footer: React.FC = () => {
	return (
	<FooterContainer>
	  <p>카카오톡 선물하기</p>
	</FooterContainer>
  );
}

export default Footer;