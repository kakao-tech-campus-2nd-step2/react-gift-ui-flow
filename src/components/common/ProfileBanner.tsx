import styled from '@emotion/styled';
import React from 'react';

const ProfileBanner: React.FC = () => {
    return (
        <BannerContainer>
            <ProfileImage src='https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png' alt='프로필 이미지' />
            <TextContainer>
                <Title>선물 받을 친구를 선택해주세요.</Title>
            </TextContainer>
        </BannerContainer>
    );
};

export default ProfileBanner;

const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #f7f7f7; /* 연한 회색 배경 */
`;

const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    font-size: 18px;
    color: #000;
    margin: 0;
`;
