import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "https://60cdf77891cc8e00178dc3a7.mockapi.io/api/v1",
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  //this is how to change the implementation of get method
  //Before the original function
  const response = await get(url, params, axiosConfig);
  //After the original function
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
