import { baseApi } from "@/redux/api/baseApi";

export const uploadVideoAudioApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    requestPayment: build.mutation({
      query: (payload) => ({
        url: `payment/request`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["financial"],
    }),

    getMyFiles: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `statics/my-files`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any[], meta: any) => {
        return {
          data: response?.data,
          meta,
        };
      },
      providesTags: ["financial"],
    }),
  }),
});

export const { useRequestPaymentMutation, useGetMyFilesQuery } =
  uploadVideoAudioApi;
