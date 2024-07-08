import styled from '@emotion/styled';

type MenuButtonProps = {
  icon: string;
  text: string;
  active: boolean;
  onClick: () => void;
};

const MenuButton = ({ icon, text, active, onClick }: MenuButtonProps) => {
  return (
    <MenuButtonWrapper onClick={onClick}>
      <MenuButtonIcon active={active}>{icon}</MenuButtonIcon>
      <MenuButtonText active={active}>{text}</MenuButtonText>
    </MenuButtonWrapper>
  );
}

export default MenuButton

const MenuButtonWrapper = styled.div`
  width: 230px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuButtonIcon = styled.button<{ active: boolean }>`
  outline: none;
  width: 60px;
  height: 60px;
  border-radius: 24px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: rgb(255, 255, 255);
  background-color: ${(props) => (props.active ? 'rgb(70,132,233)' : 'rgb(230, 241, 255)')};
  transition: background-color 200ms ease 0s;
`;

const MenuButtonText = styled.p<{ active: boolean }>`
  cursor: pointer;
  padding: 10px 0px 6px;
  color: ${(props) => (props.active ? 'rgb(70,132,233)' : '#000')};
  font-weight: ${(props) => (props.active ? '700' : '400')};
  transition:
    color 2--ms ease 0s,
    font-weight 200ms ease 0s;
`;