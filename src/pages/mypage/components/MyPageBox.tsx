import styled from '@emotion/styled';

import { Button } from '@/components/common/Button/index';
import useLogout from '@/hooks/custom-hooks/useLogout';

const NameMargin = styled.div`
  width: 100%;
  height: 64px;
`;

const BtnWrapper = styled.div`
  width: 200px;
`;

const MyPageBox = () => {
  const name = sessionStorage.getItem('authToken');
  const { handleLogoutClick } = useLogout();

  return (
    <>
      {name}님 안녕하세요!
      <NameMargin />
      <BtnWrapper>
        <Button theme="darkGray" size="small" onClick={handleLogoutClick}>
          로그아웃
        </Button>
      </BtnWrapper>
    </>
  );
};

export default MyPageBox;
