import { useEffect } from "react";
import Loader from "@/utils/Loader";
import { useNavigate } from "react-router-dom";
import useVerification from "@/utils/isVerified";

const IsVerifiedRoutes = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  const { isVerified, isLoading, isError } = useVerification();
  const token = localStorage.getItem("accessToken");
  useEffect(() => {
    if (!token) {
      navigate("/auth/login");
    }
    if (!isLoading && !isVerified) {
      navigate("/verify");
    }
  }, [isLoading, isVerified, navigate, token]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error loading user data</div>;
  }

  return isVerified ? children : null;
};

export default IsVerifiedRoutes;
