import { useAppSelector } from "@/redux/hooks";
import { useCurrentAccessToken } from "@/redux/slices/auth/authSlice";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoutes = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();

  const rawToken: string | null = useAppSelector(useCurrentAccessToken);
  const token = rawToken ? rawToken.replace(/^"|"$/g, "") : null;
  console.log(token);

  useEffect(() => {
    if (!token) {
      navigate("/auth/login");
    }
  }, [token, navigate]);

  return token ? children : null;
};

export default PrivateRoutes;
