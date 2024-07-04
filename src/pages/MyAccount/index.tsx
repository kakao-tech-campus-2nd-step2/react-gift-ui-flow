import styled from "@emotion/styled";

import { Button } from "@/components/common/Button";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

const MyAccount = () => {
  const username = "test";
  return (
    <div>
      <Header isLogin={true} />
      <Wrapper>
        {username}님 안녕하세요!
        <div style={{ height: "64px" }} />
        <Button theme="darkGray" size="small" style={{ width: "200px" }}>
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
