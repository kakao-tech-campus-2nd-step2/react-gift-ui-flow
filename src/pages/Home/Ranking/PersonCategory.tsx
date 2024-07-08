import styled from '@emotion/styled/macro';
import { useState } from 'react';

import { Grid } from '@/components/common/layouts/Grid';

interface Person {
  key: 'all' | 'f' | 'm' | 's';
  category: string;
  ment: string;
}
const personGroup: Person[] = [
  { key: 'all', category: 'ALL', ment: '전체' },
  { key: 'f', category: '👩🏻‍🦰', ment: '여성이' },
  { key: 'm', category: '👨🏻‍🦰', ment: '남성이' },
  { key: 's', category: '🧑🏻‍🦱', ment: '청소년이' },
];

export const PersonCategory = () => {
  const [category, setCategory] = useState('all');
  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };
  return (
    <Grid columns={4}>
      {personGroup.map((p: Person) => (
        <Label htmlFor={p.key} key={p.key}>
          <RadioInput
            type="radio"
            id={p.key}
            name="person_group"
            value={p.key}
            onChange={handleCategory}
            checked={category === p.key}
          />
          <Category>{p.category}</Category>
          <CategoryMent>{p.ment}</CategoryMent>
        </Label>
      ))}
    </Grid>
  );
};
const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
`;
const Category = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgb(230, 241, 255);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
`;
const CategoryMent = styled.div`
  font-size: 20px;
  transition: all 0.3s ease-in-out;
`;
const RadioInput = styled.input`
  display: none;
  &:checked + ${Category} {
    background-color: rgb(70, 132, 233);
  }
  &:checked ~ ${CategoryMent} {
    color: rgb(70, 132, 233);
    font-weight: bold;
  }
`;
