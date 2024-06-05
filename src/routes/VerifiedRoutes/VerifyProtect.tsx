/* eslint-disable @typescript-eslint/ban-ts-comment */
// src/components/ProtectedRoute/ProtectedRoute.tsx

import { useAppSelector } from "@/redux/hooks";
import { useIsVerified } from "@/redux/slices/auth/authSlice";
import useVerification from "@/utils/isVerified";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IsVerifiedRoutes = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  // const { isVerified, isLoading, isError, error } = useVerification();
  const isVerified = useAppSelector(useIsVerified);
  console.log(isVerified);
  // console.log(error, "error");
  useEffect(() => {
    if (!isVerified) {
      navigate("/verify");
    }
  }, [isVerified, navigate]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (
  //   //@ts-ignore
  //   error?.data?.message == "You are not authorized" ||
  //   //@ts-ignore
  //   error?.data?.message == "Invalid token"
  // ) {
  //   // toast.error("You are not authorized");
  //   navigate("/auth/login");
  // }
  // if (isError) {
  //   return <div>Error loading user data</div>;
  // }

  return isVerified ? children : null;
};

export default IsVerifiedRoutes;
