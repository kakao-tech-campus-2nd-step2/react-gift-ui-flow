import styled from '@emotion/styled/macro';

import { breakpoints } from '@/styles/variants';

export const SituationCategory = () => {
  return (
    <Wrapper>
      <RadioInput type="radio" id="want" name="situation-category" />
      <Label htmlFor="want">받고 싶어한</Label>

      <RadioInput type="radio" id="many" name="situation-category" />
      <Label htmlFor="many">많이 선물한</Label>

      <RadioInput type="radio" id="wish" name="situation-category" />
      <Label htmlFor="wish">위시로 받은</Label>
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
