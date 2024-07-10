import { getAccessToken } from "@/utils/sessionStorage";
import { useNavigate } from "react-router-dom";

const NotForLoggedInUser = ({ children }: React.PropsWithChildren) => {
  const navigate = useNavigate();
  const isLoggedIn = getAccessToken();

  if (isLoggedIn) {
    navigate("/");
  }
  return <>{children}</>;
};

export default NotForLoggedInUser;
