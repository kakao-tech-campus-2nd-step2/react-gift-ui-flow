import styled from '@emotion/styled';

type Props = {
  label: string;
  selected: boolean;
  onClick: () => void;
};

export const RankTypeButton = ({ selected, label, onClick }: Props) => {
  return (
    <Wrapper selected={selected} onClick={onClick}>
      {label}
    </Wrapper>
  );
};

export default RankTypeButton

const Wrapper = styled.button<Pick<Props, 'selected'>>`
  padding: 13px 20px;
  font-size: 20px;
  line-height: 16px;
  color: ${({ selected }) => (selected ? '#4684e9' : 'rgba(70, 132, 233, 0.7)')};
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  transition: color 200ms, font-weight 200ms;
  &:focus {
    outline: none;
  }
`;
export {};