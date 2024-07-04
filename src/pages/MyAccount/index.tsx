import styled from '@emotion/styled';
import { useContext } from 'react';

import { Button } from '@/components/common/Button';
import { UserInfo } from '@/providers/UserInfoProviders';

export const MyAccount = () => {
  const { userName } = useContext(UserInfo);
  const { setUserName } = useContext(UserInfo);
  const handleLogout = () => {
    setUserName('');
    sessionStorage.clear();
  };
  return (
    <Wrapper>
      <Title>{userName}님 안녕하세요!</Title>
      <Button theme="darkGray" size="small" style={{ width: 200 }} onClick={handleLogout}>
        로그아웃
      </Button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 100px 0;
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
`;
