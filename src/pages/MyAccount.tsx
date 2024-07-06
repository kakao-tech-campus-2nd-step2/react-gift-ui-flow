import styled from '@emotion/styled';

import { Button } from '@/components/common/Button';
import { RouterPath } from '@/routes';

export const MyAccount = () => {
  const handleLogout = () => {
    sessionStorage.removeItem('authToken');

    const redirectURL = `${window.location.origin}${RouterPath.home}`;
    window.location.replace(redirectURL);
  };

  return (
    <StyledMyAccount>
      김민주님 안녕하세요!
      <Button
        size="small"
        theme="darkGray"
        onClick={handleLogout}
        style={{
          maxWidth: '200px',
        }}
      >
        로그아웃
      </Button>
    </StyledMyAccount>
  );
};

const StyledMyAccount = styled.div`
  width: 100%;
  padding: 80px 0 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 36px;

  gap: 64px;
`;
