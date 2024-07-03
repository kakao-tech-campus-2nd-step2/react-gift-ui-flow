import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

const imageUrl =
  'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png';

const Theme: React.FC = () => {
  const labels = [
    '생일',
    '졸업선물',
    '스몰 럭셔리',
    '명품선물',
    '결혼/집들이',
    '따뜻한선물',
    '가벼운선물',
    '팬심저격',
    '교환권',
    '건강/비타민',
    '과일/한우',
    '출산/키즈',
  ];
  return (
    <GridContainer>
      {labels.map((label, index) => (
        <ThemeLink key={index} to="/theme/:themeKey">
          <ThemeImage src={imageUrl} alt={`Theme ${index + 1}`} />
          <Label>{label}</Label>
        </ThemeLink>
      ))}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding: 14px 14px 3px;
  height: 308px;
  box-sizing: border-box;
  align-items: center;
`;

const ThemeLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  &:focus {
    outline: none;
  }
`;

const ThemeImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 18px;
`;

const Label = styled.div`
  padding-top: 5px;
  font-size: 13px;
  line-height: 17px;
  color: rgb(51, 51, 51);
`;

export default Theme;
