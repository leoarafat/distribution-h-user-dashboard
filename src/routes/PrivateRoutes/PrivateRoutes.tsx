import { useEffect } from "react";
import Loader from "@/utils/Loader";
import { useLocation, useNavigate } from "react-router-dom";
import useLoggedin from "@/utils/isLoggedin";
import { storeUserInfo } from "@/redux/services/auth.service";

const PrivateRoutes = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  const { isLoggedIn, isLoading, isError } = useLoggedin();
  const tokens = localStorage.getItem("accessToken");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      storeUserInfo({ accessToken: token });
    }
  }, [location]);
  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      navigate("/verify");
    }
    if (!tokens) {
      navigate("/auth/login");
    }
  }, [isLoading, isLoggedIn, navigate, tokens]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    localStorage.removeItem("accessToken");
    window.location.reload();
  }

  return isLoggedIn ? children : null;
};

export default PrivateRoutes;
