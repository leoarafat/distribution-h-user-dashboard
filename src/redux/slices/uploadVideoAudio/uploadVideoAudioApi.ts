import { baseApi } from "@/redux/api/baseApi";

export const uploadVideoAudioApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    uploadVideo: build.mutation({
      query: (payload) => ({
        url: `video/upload`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["video"],
    }),
    uploadSingleAudio: build.mutation({
      query: (payload) => ({
        url: `single-music/upload`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["single-audio"],
    }),
    uploadAlbum: build.mutation({
      query: (payload) => ({
        url: `album/upload`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["album"],
    }),

    getVideo: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `account/my-account`,
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
      providesTags: ["bank", "mobile-bank", "pioneer"],
    }),
  }),
});

export const {
  useUploadAlbumMutation,
  useUploadSingleAudioMutation,
  useUploadVideoMutation,
} = uploadVideoAudioApi;