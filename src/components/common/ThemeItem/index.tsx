import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

type ThemeItemProps = {
  themeKey: string;
  imageSrc: string;
  label: string;
};

const ThemeItem: React.FC<ThemeItemProps> = ({ themeKey, imageSrc, label }) => (
  <ThemeLink to={`/theme/${themeKey}`}>
    <ImageWrapper>
      <ThemeImage src={imageSrc} alt={label} />
    </ImageWrapper>
    <ThemeLabel>{label}</ThemeLabel>
  </ThemeLink>
);

const ThemeLink = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  margin-bottom: 35px;
`;

const ImageWrapper = styled.div`
  width: 90px;
  height: 90px;
  margin: 0 auto;
  border-radius: 32px;
  overflow: hidden;
`;

const ThemeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ThemeLabel = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: #333;
`;

export default ThemeItem;
