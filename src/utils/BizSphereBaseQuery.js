import BizSphere from "./BizSphere";

const BizSphereBaseQuery =
  () =>
    async ({ url, method, body, params, headers }) => {
    try {
      const res = await BizSphere({
        url: url,
        method: method ?? "GET",
        data: body ?? [], // in params changes data to body
        params: params ?? {},
        headers: headers ?? { "Content-Type": "application/json" },
      });
      return { data: res.data };
    } catch (error) {
      return {
        error: {
          status: error?.response?.status,
          data: error?.response?.data || error?.message,
        },
      };
    }
  };

export default BizSphereBaseQuery;