// // src/components/ProtectedRoute/ProtectedRoute.tsx

// import Loader from "@/utils/Loader";
// import useVerification from "@/utils/isVerified";

// import { useNavigate } from "react-router-dom";

// const IsVerifiedRoutes = ({ children }: { children: JSX.Element }) => {
//   const navigate = useNavigate();
//   const { isVerified, isLoading, isError } = useVerification();

//   if (!isLoading && !isVerified) {
//     navigate("/verify");
//   }

//   if (isLoading) {
//     return <Loader />;
//   }

//   if (isError) {
//     return <div>Error loading user data</div>;
//   }

//   return isVerified ? children : null;
// };

// export default IsVerifiedRoutes;
// src/components/ProtectedRoute/ProtectedRoute.tsx

import { useEffect } from "react";
import Loader from "@/utils/Loader";
import { useNavigate } from "react-router-dom";
import useVerification from "@/utils/isVerified";

const IsVerifiedRoutes = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  const { isVerified, isLoading, isError } = useVerification();

  useEffect(() => {
    if (!isLoading && !isVerified) {
      navigate("/verify");
    }
  }, [isLoading, isVerified, navigate]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error loading user data</div>;
  }

  return isVerified ? children : null;
};

export default IsVerifiedRoutes;
