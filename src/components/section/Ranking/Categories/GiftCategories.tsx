import styled from '@emotion/styled';
import React, { useState } from 'react';

import { breakpoints, colors } from '@/styles/variants';

interface Props {
  onCategoryChange: (category: string) => void;
}

type ButtonProps = {
  isSelected: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const GiftCategories = ({ onCategoryChange }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('받고 싶어한');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };
  return (
    <Wrapper>
      <Button
        onClick={() => handleCategoryClick('받고 싶어한')}
        isSelected={selectedCategory === '받고 싶어한'}
      >
        받고 싶어한
      </Button>
      <Button
        onClick={() => handleCategoryClick('많이 선물한')}
        isSelected={selectedCategory === '많이 선물한'}
      >
        많이 선물한
      </Button>
      <Button
        onClick={() => handleCategoryClick('위시로 받은')}
        isSelected={selectedCategory === '위시로 받은'}
      >
        위시로 받은
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  border: '1px solid rgba(70, 132, 233, 0.1)',
  backgroundColor: colors.skyBlue,
  borderRadius: '8px',
  [`@media screen and (min-width: ${breakpoints.sm})`]: {
    borderRadius: '12px',
  },
});

const Button = styled.button<ButtonProps>`
  padding: 13px 20px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  transition:
    color 200ms ease 0s,
    font-weight 200ms ease 0s;
  color: ${({ isSelected }) => (isSelected ? 'rgb(70, 132, 233)' : 'inherit')};
  font-weight: ${({ isSelected }) => (isSelected ? '700' : 'inherit')};
  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 20px 30px;
    font-size: 22px;
    line-height: 22px;
  }
`;
