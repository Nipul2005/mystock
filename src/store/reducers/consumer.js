import { createApi } from "@reduxjs/toolkit/query/react";
import BizSphereBaseQuery from "../../utils/BizSphereBaseQuery";

const consumerApi = createApi({
  reducerPath: "consumer",
  baseQuery: BizSphereBaseQuery(),
  tagTypes: ["consumer"],

  // now after we'll write here routes
  endpoints: (builder) => ({
    // route one
    getServices: builder.query({
      query: () => ({
        url: "/consumer/getServices",
        method: "GET",
      }),
      providesTags: ["consumer"],
    }),
  }),
});
export const { useGetServicesQuery } = consumerApi;
export default consumerApi;
