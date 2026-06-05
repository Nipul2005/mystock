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
          }),
          signUp: builder.mutation({
            query: (formData) => ({
              url: "/signup",
              method: "POST",
              body: formData,
            }),
          }),
    })
})


export const { useLoginMutation, useSignUpMutation } = userSlice
export default userSlice
