import styled from '@emotion/styled';
import React from 'react';

import ProfileBanner from './components/common/ProfileBanner';
import CategoryList from './components/Home/CategotyList';
import TrendingGifts from './components/Home/TrendingGifts';
import YellowButton from './components/Home/YellowButton';

const Home: React.FC = () => {
    return (
        <MainContainer>
            <ProfileBanner />
            <CategoryList />
            <YellowButton />
            <TrendingGifts />
        </MainContainer>
    );
};

export default Home;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
