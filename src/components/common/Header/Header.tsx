import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import PATH from '@/components/constants';
import { useAuth } from '@/components/AuthContext'; // useAuth 를 AuthContext 에서 가져옴

export default function Header() {
  const navigate = useNavigate();
  const { isAuth } = useAuth(); // 현재 로그인 상태를 가져옴

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <HeaderWrapper>
      <HeaderContent>
        <GivePresent onClick={() => handleNavigate(PATH.MAINPAGE)}>선물하기</GivePresent>
        {isAuth ? ( // 로그인 상태에 따라 버튼 렌더링
          <MyAccount onClick={() => handleNavigate(PATH.MYPAGE)}>내 계정</MyAccount>
        ) : (
          <Login onClick={() => handleNavigate(PATH.LOGINPAGE)}>로그인</Login>
        )}
      </HeaderContent>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  background-color: #fff;
  z-index: 3;
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 54px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const GivePresent = styled.div`
  width: 60.75px;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  line-height: 54px;
`;

const Login = styled.div`
  width: 42px;
  cursor: pointer;
  line-height: 54px;
`;

const MyAccount = styled.div`
  cursor: pointer;
  line-height: 54px;
`;
