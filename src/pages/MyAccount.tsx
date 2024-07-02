import styled from '@emotion/styled';

const MyAccountContainer = styled.div`
  width: 100%;
  padding: 80px 0px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 36px;
`;

const DivHeight = styled.div`
  width: 100%;
  height: 64px;
`;

const StyledButton = styled.button`
  max-width: 200px;
  width: 100%;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 200ms ease 0s;
  height: 40px;
  font-size: 15px;
  color: rgb(255, 255, 255);
  background-color: rgb(68, 68, 68);

  &:hover {
    background-color: rgb(85, 85, 85);
  }
`;

const MyAccount = () => {
  return (
    <MyAccountContainer>
      {`${''}님 안녕하세요!`}
      <DivHeight />
      <StyledButton>로그아웃</StyledButton>
    </MyAccountContainer>
  );
};

export default MyAccount;
