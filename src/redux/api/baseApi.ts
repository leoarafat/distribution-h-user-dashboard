import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";
import { getFromLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/constants/storageKey";
import axios from "axios";
const authToken = getFromLocalStorage(authKey);

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://146.190.130.172:5000/api/v1",
    headers: { Authorization: `Bearer ${authToken}` },
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
export const imageURL = "http://146.190.130.172:5000";
export const baseUrl = axios.create({
  baseURL: "http://146.190.130.172:5000/api/v1",
});
export const socketURL = "http://146.190.130.172:5000/api/v1";
