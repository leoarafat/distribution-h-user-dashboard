import { useMyProfileQuery } from "@/redux/slices/admin/settingApi";
import { useEffect } from "react";

const useApproved = () => {
  const id = localStorage.getItem("id");
  const {
    data: profileData,
    isLoading,
    isError,
    error,
  } = useMyProfileQuery(id);
  const isApproved = profileData?.data?.isApproved === "approved";

  useEffect(() => {
    if (isApproved) {
      localStorage.setItem("isApproved", "true");
    } else if (!isLoading && !isError) {
      localStorage.removeItem("isApproved");
    }
  }, [isApproved, isLoading, isError]);

  const persistedIsApproved = localStorage.getItem("isApproved") === "true";

  return {
    isApproved: persistedIsApproved || isApproved,
    isLoading,
    isError,
    error,
  };
};

export default useApproved;
