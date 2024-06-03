import { baseApi } from "@/redux/api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    adminLogin: build.mutation({
      query: (loginData) => ({
        url: `auth/login`,
        method: "POST",
        body: loginData,
      }),
      invalidatesTags: ["admin"],
    }),
    makeAdmin: build.mutation({
      query: (adminData) => ({
        url: `user/create-admin`,
        method: "POST",
        body: adminData,
      }),
      invalidatesTags: ["admin"],
    }),
    getAllAdmins: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `user/all-admin`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any[], meta: any) => {
        return {
          data: response,
          meta,
        };
      },
      providesTags: ["admin"],
    }),
    myProfile: build.query({
      query: () => ({
        url: "user/profile",
        method: "GET",
      }),
      providesTags: ["admin"],
    }),
    deleteAdmin: build.mutation({
      query: (id) => ({
        url: `user/delete-admin/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["admin"],
    }),
  }),
});

export const {
  useAdminLoginMutation,
  useMakeAdminMutation,
  useGetAllAdminsQuery,
  useDeleteAdminMutation,
  useMyProfileQuery,
} = userApi;
