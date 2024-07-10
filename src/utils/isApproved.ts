// src/hooks/useApproved.ts

import { useProfileQuery } from "@/redux/slices/admin/userApi";

const useApproved = () => {
  const { data: profileData, isLoading, isError, error } = useProfileQuery({});
  const isApproved = profileData?.data?.isApproved === "approved";
  console.log(isApproved);
  return { isApproved, isLoading, isError, error };
};

export default useApproved;
