// src/hooks/useVerification.ts

import { useProfileQuery } from "@/redux/slices/admin/userApi";

const useVerification = () => {
  const { data: profileData, isLoading, isError } = useProfileQuery({});
  const isVerified = profileData?.data?.isVerified;

  return { isVerified, isLoading, isError };
};

export default useVerification;
