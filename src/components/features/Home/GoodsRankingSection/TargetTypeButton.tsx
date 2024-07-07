import styled from '@emotion/styled';

type Props = {
  value?: 'ALL' | 'FEMALE' | 'MALE' | 'TEEN';
  selected: boolean;
  //   onClick: (target?: 'ALL' | 'FEMALE' | 'MALE' | 'TEEN') => void;
};

export const TargetTypeButton = ({ value, selected }: Props) => {
  return (
    <StyledTargetTypeButton
    //   onClick={() => {
    //     onClick(value);
    //   }}
    >
      <Icon selected={selected}>{value}</Icon>
      <Text selected={selected}>전체</Text>
    </StyledTargetTypeButton>
  );
};

const StyledTargetTypeButton = styled.button`
  width: 100%;
  min-width: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & + & {
    padding-left: 16px;
  }

  &:focus {
    outline: none;
  }
`;

const Icon = styled.div<Pick<Props, 'selected'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 16px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  background-color: ${({ selected }) => (selected ? '#4684e9' : '#e6f1ff')};
  transition: background-color 200ms;
`;
const Text = styled.p<Pick<Props, 'selected'>>`
  padding: 5px 0;
  font-size: 14px;
  line-height: 16px;
  color: ${({ selected }) => (selected ? '#4684e9' : '#666')};
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  transition:
    color 200ms,
    font-weight 200ms;
`;
