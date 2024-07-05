import styled from '@emotion/styled';
import React, { useState } from 'react';

import { breakpoints } from '@/styles/variants';

interface Props {
  onCategoryChange: (category: string) => void;
}
type ButtonProps = {
  isSelected: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const WhoCategories = ({ onCategoryChange }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <Wrapper>
      <Button onClick={() => handleCategoryClick('전체')} isSelected={selectedCategory === '전체'}>
        <Icon isSelected={selectedCategory === '전체'}>ALL</Icon>
        <p>전체</p>
      </Button>
      <Button
        onClick={() => handleCategoryClick('여성이')}
        isSelected={selectedCategory === '여성이'}
      >
        <Icon isSelected={selectedCategory === '여성이'}>👩</Icon>
        <p>여성이</p>
      </Button>
      <Button
        onClick={() => handleCategoryClick('남성이')}
        isSelected={selectedCategory === '남성이'}
      >
        <Icon isSelected={selectedCategory === '남성이'}>👨</Icon>
        <p>남성이</p>
      </Button>
      <Button
        onClick={() => handleCategoryClick('청소년이')}
        isSelected={selectedCategory === '청소년이'}
      >
        <Icon isSelected={selectedCategory === '청소년이'}>👧</Icon>
        <p>청소년이</p>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Button = styled.button<ButtonProps>`
  &:not(:first-of-type) {
    @media screen and (min-width: ${breakpoints.sm}) {
      margin-left: 36px;
      padding-left: 16px;
    }
  }
  @media screen and (min-width: ${breakpoints.sm}) {
    min-width: 90px;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  p {
    color: ${({ isSelected }) => (isSelected ? 'rgb(70, 132, 233)' : 'inherit')};
    font-weight: ${({ isSelected }) => (isSelected ? '700' : 'inherit')};
  }
`;

const Icon = styled.div<ButtonProps>`
  @media screen and (min-width: ${breakpoints.sm}) {
    width: 60px;
    height: 60px;
    font-size: 20px;
    border-radius: 24px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  font-size: 14px;
  border-radius: 16px;
  color: rgb(255, 255, 255);
  transition: 200ms ease 0s;
  background-color: ${({ isSelected }) =>
    isSelected ? 'rgb(70, 132, 233)' : 'rgb(230, 241, 255)'};
`;
