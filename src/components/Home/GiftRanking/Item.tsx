import styled from '@emotion/styled';

export interface IItem {
  icon?: string;
  text: string;
  targetValue?: string;
  typeValue?: string;
  onClick?: () => void;
}
export const Item = ({ icon, text, targetValue, onClick }: IItem) => {
  return (
    <ItemWrapper onClick={onClick}>
      <Icon targetValue={targetValue} text={text}>
        {icon}
      </Icon>
      <Text targetValue={targetValue} text={text}>
        {text}
      </Text>
    </ItemWrapper>
  );
};
const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    gap: 6px;
  }
`;
const Icon = styled.div<Pick<IItem, 'targetValue' | 'text'>>`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 20px;
  border: none;
  color: white;
  font-weight: bolder;
  font-size: 20px;
  background-color: ${(props) => (props.targetValue === props.text ? '#4684E9' : 'rgb(230, 241, 255)')};
  transition: background-color 0.2s;

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
    border-radius: 16px;
    font-size: 14px;
  }
`;

const Text = styled.p<Pick<IItem, 'targetValue' | 'text'>>`
  font-size: 20px;
  font-weight: ${(props) => (props.targetValue === props.text ? 'bold' : '400')};
  color: ${(props) => (props.targetValue === props.text ? '#4684E9' : 'black')};
  text-align: center;
  transition:
    color 0.2s,
    font-weight 0.2s;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
