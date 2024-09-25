import { useMyProfileQuery } from "@/redux/slices/admin/settingApi";

const useVerification = () => {
  const id = localStorage.getItem("id");
  const {
    data: profileData,
    isLoading,
    isError,
    error,
  } = useMyProfileQuery(id);
  const isVerified = !!profileData?.data?.isVerified;

  return { isVerified, isLoading, isError, error };
};

export default useVerification;
