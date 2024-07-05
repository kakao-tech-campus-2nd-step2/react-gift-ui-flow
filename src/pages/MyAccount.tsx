import { useNavigate } from "react-router-dom";
import { Button } from "../components/common/Button/index";
import { css } from "@emotion/css";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import styled from "@emotion/styled";

const MyAccount = () => {
  const navigate = useNavigate();
  const { username, logout } = useContext(AuthContext);

  if (!username) navigate("/login");

  const handleLogout = () => {
    logout();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <StyledMyAccount>
      <h3>{username} 님 안녕하세요?</h3>
      <div
        className={css`
          width: 200px;
        `}
      >
        <Button theme="darkGray" size="small" onClick={handleLogout}>
          로그아웃
        </Button>
      </div>
    </StyledMyAccount>
  );
};

const StyledMyAccount = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: 8rem;

  h3 {
    font-size: 2.5rem;
    font-weight: 600;
  }
`;

export default MyAccount;
