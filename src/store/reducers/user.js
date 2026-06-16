import { createApi } from "@reduxjs/toolkit/query/react";
import BizSphereBaseQuery from "../../utils/BizSphereBaseQuery";
import BizSphere from "../../utils/BizSphere";

const userSlice = createApi({
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
      providesTags: ["User"],
    }),
    signUp: builder.mutation({
      query: (formData) => ({
        url: "/signup",
        method: "POST",
        body: formData,
      }),
      providesTags: ["User"],
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),

    getCurrentUser: builder.query({
      query: () => ({
        url: "/guess",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useGetCurrentUserQuery,
  useLogoutMutation,
} = userSlice;
export default userSlice;
