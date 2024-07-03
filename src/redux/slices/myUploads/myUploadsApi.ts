import { baseApi } from "@/redux/api/baseApi";

export const myUploadsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPendingVideo: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `my-uploads/pending-videos`,
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
      providesTags: ["video"],
    }),
    getSuccessVideo: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `my-uploads/success-videos`,
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
      providesTags: ["video"],
    }),
    getCorrectionVideo: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `my-uploads/correction-videos`,
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
      providesTags: ["video"],
    }),
  }),
});

export const {
  useGetSuccessVideoQuery,
  useGetPendingVideoQuery,
  useGetCorrectionVideoQuery,
} = myUploadsApi;
