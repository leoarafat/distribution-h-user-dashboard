import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { getFromLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/constants/storageKey";
import axios from "axios";
import { tagsList } from "../tag-types";
const authToken = getFromLocalStorage(authKey);
// https://backend.bemusix.com
// http://localhost:7001
//https://api.bemusixbackstage.com
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://139.59.71.81:7001",
    headers: { Authorization: `Bearer ${authToken}` },
  }),
  endpoints: () => ({}),
  tagTypes: tagsList,
});
export const imageURL = "http://139.59.71.81:7001";
export const baseUrl = axios.create({
  baseURL: "http://139.59.71.81:7001",
});
export const socketURL = "http://139.59.71.81:7001";
