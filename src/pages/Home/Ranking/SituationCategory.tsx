import styled from '@emotion/styled/macro';
import { useState } from 'react';

import { breakpoints } from '@/styles/variants';
interface Situation {
  key: string;
  ment: string;
}
const situationGroup: Situation[] = [
  {
    key: 'want',
    ment: '받고 싶어한',
  },
  {
    key: 'many',
    ment: '많이 선물한',
  },
  {
    key: 'wish',
    ment: '위시로 받은',
  },
];

export const SituationCategory = () => {
  const [category, setCategory] = useState('want');
  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
    console.log(category);
  };
  return (
    <Wrapper>
      {situationGroup.map((s: Situation) => (
        <div key={s.key}>
          <RadioInput
            type="radio"
            id={s.key}
            name="situation-category"
            value={s.key}
            onChange={handleCategory}
            checked={category === s.key}
          />
          <Label htmlFor={s.key} key={s.key}>
            {s.ment}
          </Label>
        </div>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: ${breakpoints.md};
  margin: 30px auto 0;
  padding: 25px 20px;
  background-color: rgb(230, 241, 255);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  gap: 50px;
`;
const Label = styled.label`
  font-size: 22px;
  color: rgba(70, 132, 233, 0.7);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;
const RadioInput = styled.input`
  display: none;
  &:checked + ${Label} {
    color: rgb(70, 132, 233);
    font-weight: bold;
  }
`;
