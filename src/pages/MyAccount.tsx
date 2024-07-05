import styled from "@emotion/styled";

import { Button } from "@/components/common/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledText = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 50px;
`;

interface MyAccountProps {
	username: string;
}

const MyAccount: React.FC<MyAccountProps>= ({username}) => {
	  return (
	<Container>
	  <StyledText>{username}님 안녕하세요!</StyledText>
	  <Button>로그아웃</Button>
	</Container>
  );
}

export default MyAccount;