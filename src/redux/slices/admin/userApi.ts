import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (data) => ({
        url: `user/register`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    verify: build.mutation({
      query: (data) => ({
        url: `user/activate-user`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    profileVerify: build.mutation({
      query: (data) => ({
        url: `/user/profile-verify`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    labelVerify: build.mutation({
      query: (data) => ({
        url: `/user/label-verify`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    addressVerify: build.mutation({
      query: (data) => ({
        url: `/user/address-verify`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    verifyUser: build.mutation({
      query: () => ({
        url: `/user/verify-profile`,
        method: "PATCH",
      }),
      invalidatesTags: [tagTypes.user],
    }),
    profile: build.query({
      query: () => {
        return {
          url: `/user/profile`,
          method: "GET",
        };
      },

      providesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useRegisterMutation,
  useVerifyMutation,
  useProfileVerifyMutation,
  useLabelVerifyMutation,
  useProfileQuery,
  useAddressVerifyMutation,
  useVerifyUserMutation,
} = userApi;
