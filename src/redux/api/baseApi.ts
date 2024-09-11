import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { getFromLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/constants/storageKey";
import axios from "axios";
import { tagsList } from "../tag-types";
const authToken = getFromLocalStorage(authKey);
// https://backend.bemusix.com
// http://localhost:7001
//https://server.bemusixbackstage.com
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://server.bemusixbackstage.com",
    headers: { Authorization: `Bearer ${authToken}` },
  }),
  endpoints: () => ({}),
  tagTypes: tagsList,
});
export const imageURL = "https://server.bemusixbackstage.com";
export const baseUrl = axios.create({
  baseURL: "https://server.bemusixbackstage.com",
});
export const socketURL = "https://server.bemusixbackstage.com";
