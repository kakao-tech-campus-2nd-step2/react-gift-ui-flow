import styled from '@emotion/styled';
import React from 'react';

type HeaderProps = {
  themeKey: string;
};

const HeaderContainer = styled.div<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 65px 20px;
  color: #fff;
`;

const Label = styled.div`
  font-size: 20px;
  color: #ccc;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: #ccc;
`;

const themeData: Record<string, { label: string; title: string; description: string; backgroundColor: string }> = {
  'theme1': {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#333',
  },
  'theme2': {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#333',
  },
  'theme3': {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#333',
  },
  'theme4': {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#333',
  },
  'theme5': {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#333',
  },
  'theme6': {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#333',
  },
  'theme7': {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#333',
  },
  'theme8': {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#333',
  },
  'theme9': {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#333',
  },
  'theme10': {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#333',
  },
  'theme11': {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#333',
  },
  'theme12': {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#333',
  },
  'theme13': {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#333',
  },
  'theme14': {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#333',
  },
  'theme15': {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#333',
  },
  'theme16': {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#333',
  },
};

const Header: React.FC<HeaderProps> = ({ themeKey }) => {
  const theme = themeData[themeKey];

  if (!theme) return null;

  return (
    <HeaderContainer backgroundColor={theme.backgroundColor}>
      <Label>{theme.label}</Label>
      <Title>{theme.title}</Title>
      <Description>{theme.description}</Description>
    </HeaderContainer>
  );
};

export default Header;
