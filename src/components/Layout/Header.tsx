import styled from '@emotion/styled';

export const Header = () => {
  return (
    <Wrapper>
      <Logo>선물하기</Logo>
      <LoginButton>로그인</LoginButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
const Logo = styled.div`
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
const LoginButton = styled.div`
  cursor: pointer;
`;
