import { baseApi } from "@/redux/api/baseApi";

export const uploadVideoAudioApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // getVideo: build.query({
    //   query: (arg: Record<string, any>) => {
    //     return {
    //       url: `account/my-account`,
    //       method: "GET",
    //       params: arg,
    //     };
    //   },
    //   transformResponse: (response: any[], meta: any) => {
    //     return {
    //       data: response,
    //       meta,
    //     };
    //   },
    //   providesTags: ["bank", "mobile-bank", "pioneer"],
    // }),
  }),
});

export const {} = uploadVideoAudioApi;
