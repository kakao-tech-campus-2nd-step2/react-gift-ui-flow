import styled from '@emotion/styled';

type MenuButtonProps = {
  icon: string;
  text: string;
};
export default function MenuButton({ icon, text }: MenuButtonProps) {
  return (
    <MenuButtonWrapper>
      <MenuButtonIcon>{icon}</MenuButtonIcon>
      <MenuButtonText>{text}</MenuButtonText>
    </MenuButtonWrapper>
  );
}

const MenuButtonWrapper = styled.div`
  width: 230px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuButtonIcon = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 24px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: rgb(255, 255, 255);
  background-color: rgb(230, 241, 255);
  transition: background-color 200ms ease 0s;
`;

const MenuButtonText = styled.p`
  padding: 10px 0px 6px;
`;
