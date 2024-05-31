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
    // updateSubCategory: build.mutation({
    //   query: ({ id, formData }) => ({
    //     url: `/subcategory/${id}`,
    //     method: "PATCH",
    //     body: formData,
    //   }),
    //   invalidatesTags: [tagTypes.subCategory],
    // }),
  }),
});

export const { useRegisterMutation, useVerifyMutation } = userApi;
