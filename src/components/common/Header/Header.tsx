import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <HeaderWrapper>
      <HeaderContent>
        <GivePresent onClick={() => handleClick('/')}>선물하기</GivePresent>
        <Login>로그인</Login>
      </HeaderContent>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 54px;
  background-color: #fff;
  z-index: 3;
  position: fixed;
`;

const HeaderContent = styled.div`
  width: 95vw;
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
