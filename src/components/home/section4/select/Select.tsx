import styled from '@emotion/styled';

import useSelectButton from '@/hooks/useSelectButton';

import { SelectBtn1, SelectBtn2 } from './SelectBtn';

const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SelectBtn1Container = styled.div`
  padding: 20px 0px 7px;
  display: flex;
  width: 100%;
`;

const SelectBtn2Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid rgba(70, 132, 233, 0.1);
  background-color: rgb(230, 241, 255);
  border-radius: 12px;

  @media (max-width: 768px) {
    border-radius: 8px;
  }
`;

const btnConfig1 = [
  { type1: 'ALL', type2: '전체' },
  { type1: '👩🏻‍🦳', type2: '여성이' },
  { type1: '👨🏻‍🦳', type2: '남성이' },
  { type1: '👦🏻', type2: '청소년이' },
];

const btnConfig2 = ['받고 싶어한', '많이 선물한', '위시로 받은'];

const Select = () => {
  const { selectBtn1, selectBtn2, handleClicked, handleBtnClicked2 } = useSelectButton();
  return (
    <SelectContainer>
      <SelectBtn1Container>
        {btnConfig1.map((btn) => (
          <SelectBtn1
            key={btn.type1}
            type1={btn.type1}
            type2={btn.type2}
            color={selectBtn1 === btn.type1 ? 'rgb(70, 132, 233)' : ''}
            onClick={handleClicked}
          />
        ))}
      </SelectBtn1Container>
      <SelectBtn2Container>
        {btnConfig2.map((text) => (
          <SelectBtn2
            key={text}
            text={text}
            active={selectBtn2 === text}
            onClick={() => handleBtnClicked2(text)}
          />
        ))}
      </SelectBtn2Container>
    </SelectContainer>
  );
};

export default Select;
