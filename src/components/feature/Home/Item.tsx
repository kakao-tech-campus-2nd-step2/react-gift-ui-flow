import styled from '@emotion/styled';

export interface IItem {
  icon?: string;
  text: string;
  selectTarget?: string;
  selectType?: string;
  onClick?: () => void;
}
export const Item = ({ icon, text, selectTarget, onClick }: IItem) => {
  return (
    <ItemWrapper>
      <Icon selectTarget={selectTarget} text={text} onClick={onClick}>
        {icon}
      </Icon>
      <Text selectTarget={selectTarget} text={text}>
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
`;
const Icon = styled.div<Pick<IItem, 'selectTarget' | 'text'>>`
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
  background-color: ${(props) => (props.selectTarget === props.text ? '#4684E9' : 'rgb(230, 241, 255)')};
  transition: 0.2s;
`;

const Text = styled.p<Pick<IItem, 'selectTarget' | 'text'>>`
  font-size: 20px;
  font-weight: ${(props) => (props.selectTarget === props.text ? 'bold' : '400')};
  color: ${(props) => (props.selectTarget === props.text ? '#4684E9' : 'black')};
  text-align: center;
  transition: 0.2s;
`;
