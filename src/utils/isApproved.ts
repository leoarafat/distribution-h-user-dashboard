// // src/hooks/useApproved.ts

// import { useProfileQuery } from "@/redux/slices/admin/userApi";

// const useApproved = () => {
//   const { data: profileData, isLoading, isError, error } = useProfileQuery({});
//   const isApproved = profileData?.data?.isApproved === "approved";

//   return { isApproved, isLoading, isError, error };
// };

// export default useApproved;
import { useEffect } from "react";
import { useProfileQuery } from "@/redux/slices/admin/userApi";

const useApproved = () => {
  const { data: profileData, isLoading, isError, error } = useProfileQuery({});
  const isApproved = profileData?.data?.isApproved === "approved";

  // Save approval status to local storage whenever it's updated
  useEffect(() => {
    if (isApproved) {
      localStorage.setItem("isApproved", "true");
    } else if (!isLoading && !isError) {
      localStorage.removeItem("isApproved");
    }
  }, [isApproved, isLoading, isError]);

  // Retrieve approval status from local storage
  const persistedIsApproved = localStorage.getItem("isApproved") === "true";

  return {
    isApproved: persistedIsApproved || isApproved,
    isLoading,
    isError,
    error,
  };
};

export default useApproved;
