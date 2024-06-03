import Loader from "@/utils/Loader";
import useLoggedin from "@/utils/isLoggedin";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoutes = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  const { isLoggedIn, isLoading, isError } = useLoggedin();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      navigate("/verify");
    }
  }, [isLoggedIn, isLoading, navigate]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error loading user data</div>;
  }

  return isLoggedIn ? children : null;
};

export default PrivateRoutes;
