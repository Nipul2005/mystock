import { createApi } from "@reduxjs/toolkit/query/react";
import BizSphereBaseQuery from "../../utils/BizSphereBaseQuery";

const userApi = createApi({
  reducerPath: "user",
  baseQuery: BizSphereBaseQuery(),
  tagTypes: ["user"],

  // now we'll define here endpoints
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (formData) => ({
        url: "/login",
        method: "POST",
        body: formData,
      }),
      providesTags: ["user"],
    }),
    signUp: builder.mutation({
      query: (formData) => ({
        url: "/signup",
        method: "POST",
        body: formData,
      }),
      providesTags: ["user"],
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags: ["user"],
    }),

    getCurrentUser: builder.query({
      query: () => ({
        url: "/guess",
        method: "POST",
      }),
      providesTags: ["user"],
    }),

    createService: builder.mutation({
      query: (formdata) => ({
        url: "/createService",
        method: "POST",
        body: formdata,
      }),
    }),

    myServices: builder.query({
      query: () => ({
        url: "/myServices",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useGetCurrentUserQuery,
  useLogoutUserMutation,
  useCreateServiceMutation,
  useMyServicesQuery,
} = userApi;
export default userApi;
