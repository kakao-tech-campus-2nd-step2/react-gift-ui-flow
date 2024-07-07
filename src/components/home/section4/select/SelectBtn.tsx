import styled from '@emotion/styled';

interface IStyledBtn {
  type1: string;
  type2?: string;
  color?: string;
  onClick: (type: string) => void;
}

interface IStyledBtn2 {
  text?: string;
  active: boolean;
  onClick: () => void;
}

const StyledBtn1 = styled.button<IStyledBtn>`
  width: 100%;
  min-width: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  color: inherit;
  cursor: pointer;
  outline: none;

  @media (max-width: 768px) {
    min-width: 58px;
  }

  div {
    width: 60px;
    height: 60px;
    border-radius: 24px;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
    background-color: ${(props) => props.color || 'rgb(230, 241, 255)'};
    transition: background-color 200ms ease 0s;

    @media (max-width: 768px) {
      width: 44px;
      height: 44px;
      border-radius: 16px;
      font-size: 14px;
    }
  }

  p {
    padding: 10px 0px 6px;
    font-size: 20px;
    line-height: 24px;
    color: ${(props) => props.color || 'rgb(102, 102, 102)'};
    font-weight: ${(props) => (props.color ? 700 : 400)};
    transition:
      color 200ms ease 0s,
      font-weight 200ms ease 0s;
    @media (max-width: 768px) {
      padding: 5px 0px;
      font-size: 14px;
      line-height: 16px;
    }
  }
`;

const StyledBtn2 = styled.button<IStyledBtn2>`
  padding: 20px 30px;
  font-size: 22px;
  line-height: 22px;
  color: ${(props) => (props.active ? 'rgb(70, 132, 233)' : 'rgba(70, 132, 233, 0.7)')};
  font-weight: ${(props) => (props.active ? 700 : 400)};
  transition:
    color 200ms ease 0s,
    font-weight 200ms ease 0s;
  background: none;
  border: 0;
  cursor: pointer;
  outline: none;

  @media (max-width: 768px) {
    padding: 13px 20px;
    font-size: 16px;
    line-height: 16px;
  }
`;

export const SelectBtn1 = ({ type1, type2, color, onClick }: IStyledBtn) => {
  return (
    <StyledBtn1 type1={type1} color={color} onClick={() => onClick(type1)}>
      <div>{type1}</div>
      <p>{type2}</p>
    </StyledBtn1>
  );
};

export const SelectBtn2 = ({ text, active, onClick }: IStyledBtn2) => {
  return (
    <StyledBtn2 active={active} onClick={onClick}>
      {text}
    </StyledBtn2>
  );
};
