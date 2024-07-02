import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import { Grid } from './components/common/layouts/Grid';

const Main: React.FC = () => {
  const themes = [
    { key: 'theme1', name: '생일' },
    { key: 'theme2', name: '졸업선물' },
    { key: 'theme3', name: '스몰럭셔리' },
    { key: 'theme4', name: '명품선물' },
    { key: 'theme5', name: '결혼/집들이' },
    { key: 'theme6', name: '따뜻한선물' },
    { key: 'theme7', name: '가벼운선물' },
    { key: 'theme8', name: '팬심저격' },
    { key: 'theme9', name: '교환권' },
    { key: 'theme10', name: '건강/비타민' },
    { key: 'theme11', name: '과일/한우' },
    { key: 'theme12', name: '출산/키즈' },
  ];

const MainContainer = styled.main`
  background-color: #fff;
  color: #333;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 200;
  width: 100%;
`;

const ThemeLink = styled(Link)`
  padding: 10px;
  background-color: #fff;
  text-align: center;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  font-weight: 200;

  &:hover {
    background-color: #fff;
  }
`;

  return (
    <div>
      <MainContainer>
        <p>선물 받을 친구를 선택해주세요.</p>
      </MainContainer>
      <Grid columns={4} gap={20}>
        {themes.map((theme) => (
          <ThemeLink key={theme.key} to={`/theme/${theme.key}`}>
            {theme.name}
          </ThemeLink>
        ))}
      </Grid>
    </div>
  );
};

export default Main;
