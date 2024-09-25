import { useMyProfileQuery } from "@/redux/slices/admin/settingApi";

const useLoggedin = () => {
  const id = localStorage.getItem("id");
  const { data: profileData, isLoading, isError } = useMyProfileQuery(id);
  const isLoggedIn = !!profileData?.data;

  return { isLoggedIn, isLoading, isError };
};

export default useLoggedin;
