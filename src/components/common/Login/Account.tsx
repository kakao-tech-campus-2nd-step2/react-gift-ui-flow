import styled from '@emotion/styled';

import { Button } from '../Button';

type AccountProps = {
  handleLogout: () => void;
  name: string;
};

const AccountContainer = styled.section`
  width: 100%;
  padding: 80px 0px 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 36px;
`;

const Account = ({ handleLogout, name }: AccountProps) => {
  return (
    <AccountContainer>
      {name}님 안녕하세요!
      <div style={{ height: '64px' }} />
      <Button
        onClick={handleLogout}
        style={{ maxWidth: '200px' }}
        children={'로그아웃'}
        theme={'darkGray'}
        size={'small'}
      />
    </AccountContainer>
  );
};

export default Account;
