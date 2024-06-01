import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";
import { getFromLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/constants/storageKey";
import axios from "axios";
const authToken = getFromLocalStorage(authKey);

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    headers: { Authorization: `Bearer ${authToken}` },
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
export const imageURL = "http://localhost:5000";
export const baseUrl = axios.create({
  baseURL: "http://localhost:5000",
});
export const socketURL = "http://localhost:5000";
