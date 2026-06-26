import BizSphere from "./BizSphere";

const BizSphereBaseQuery =
  () =>
  async ({ url, method, body, params, headers }) => {
    try {
      const res = await BizSphere({
        url,
        method,
        data: body,
        params,
        headers,
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
