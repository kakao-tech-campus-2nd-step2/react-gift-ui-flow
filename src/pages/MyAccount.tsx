import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/common/Button";
import { useAuth } from "@/contexts/Authcontext";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const StyledText = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 50px;
`;

const StyledButton = styled(Button)`
  margin-top: 40px;
  height: 50px;
  width: 200px;
  background-color: #636061;
  color: #FFF;
  outline: none;
  :hover {
	background-color: #777475;
  }
`;

interface MyAccountProps {
	username: string;
	onLogout: () => void;
}

const MyAccount: React.FC<MyAccountProps>= () => {
	const navigate = useNavigate();
  const { user: username, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
	  return (
	<Container>
	  <StyledText>{username}님 안녕하세요!</StyledText>
	  <StyledButton onClick={handleLogout}>로그아웃</StyledButton>
	</Container>
  );
}

export default MyAccount;