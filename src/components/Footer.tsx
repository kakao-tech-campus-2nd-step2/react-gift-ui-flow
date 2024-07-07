import styled from '@emotion/styled';
import React from 'react';

const Footer: React.FC = () => {
    return(
        <FooterContainer>
            카카오톡 선물하기
        </FooterContainer>
    );
};

const FooterContainer = styled.div`
    padding: 40px 16px 120px;
    height: 180px;
    background: rgb(255, 255, 255);
    box-sizing: border-box;
`;

export default Footer;
