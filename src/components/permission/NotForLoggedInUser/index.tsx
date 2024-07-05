import { getAccessToken } from "@/utils/sessionStorage";
import { useNavigate } from "react-router-dom";

interface NotForLoggedInUserProps {
  children: React.ReactNode;
}
const NotForLoggedInUser = ({ children }: NotForLoggedInUserProps) => {
  const navigate = useNavigate();
  const isLoggedIn = getAccessToken();

  if (isLoggedIn) {
    navigate("/");
  }
  return <div>{children}</div>;
};

export default NotForLoggedInUser;
