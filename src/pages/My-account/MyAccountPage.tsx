import styled from "@emotion/styled"

import { Button } from "@/components/common/Button";

function MyAccountPage() {

  const handleSignOut = () => {
    alert("로그아웃 되었습니다!")
  }

  return(
    <MyAccountPageWrapper>
      NewJeans님 안녕하세요!
      <SignOut>
        <Button 
          children="로그아웃"
          onClick={handleSignOut}
        />
      </SignOut>

    </MyAccountPageWrapper>
  )

}

export default MyAccountPage;

const MyAccountPageWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30vh;
  font-size: 100px;
`

const SignOut = styled.div `
  margin-top: 100px;
  width: 300px;
  min-width: 100px;
`