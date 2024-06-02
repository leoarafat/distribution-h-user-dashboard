// src/components/ProtectedRoute/ProtectedRoute.tsx

import useVerification from "@/utils/isVerified";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IsVerifiedRoutes = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  const { isVerified, isLoading, isError } = useVerification();

  useEffect(() => {
    if (!isLoading && !isVerified) {
      navigate("/verify");
    }
  }, [isVerified, isLoading, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading user data</div>;
  }

  return isVerified ? children : null;
};

export default IsVerifiedRoutes;
