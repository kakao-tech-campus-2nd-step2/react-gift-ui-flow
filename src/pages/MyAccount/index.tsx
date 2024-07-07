import styled from "@emotion/styled";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthTokenContext } from "@/App";
import { Button } from "@/components/common/Button";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

const MyAccount = () => {
  const authToken = useContext(AuthTokenContext);
  const username = authToken;
  const navigate = useNavigate();

  if (authToken) {
    // 로그인 O
    console.log("로그인 O");
  } else {
    // 로그인 X
    console.log("로그인 X");

    location.href = "/login";
  }

  const handleLogout = () => {
    sessionStorage.removeItem("autoToken");
    navigate("/");
  };

  return (
    <div>
      <Header />
      <Wrapper>
        {username}님 안녕하세요!
        <div style={{ height: "64px" }} />
        <Button theme="darkGray" size="small" style={{ width: "200px" }} onClick={handleLogout}>
          로그아웃
        </Button>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default MyAccount;

const Wrapper = styled.div`
  width: 100%;
  padding: 80px 0px 120px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: 700;
  font-size: 36px;
`;
