import styled from '@emotion/styled';
import React from 'react';

const YellowButton: React.FC = () => (
    <ButtonContainer>
        <ButtonTitle>AI가 추천하는 선물</ButtonTitle>
        <ButtonSubtitle>선물을 추천받고 싶은 친구를 선택해주세요.</ButtonSubtitle>
    </ButtonContainer>
);

export default YellowButton;

const ButtonContainer = styled.button`
    background-color: yellow;
    padding: 20px;
    text-align: center;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    width: 100%;
    max-width: 1200px;
`;

const ButtonTitle = styled.h2`
    font-size: 18px;
    color: #000;
    margin: 0;
`;

const ButtonSubtitle = styled.p`
    font-size: 14px;
    color: #000;
    margin: 5px 0 0 0;
`;
