import { defineNuxtPlugin, useFetch, useRuntimeConfig } from "nuxt/app";

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();

  return {
    provide: {
      getRequest: async (endpoint, queryParams = {}) => {
        const url = `${config.public.apiBase}${endpoint}`;
        const headers = { accept: "application/json" };

        const { data } = await useFetch(url, { headers, query: queryParams, initialCache: false });
        return data.value;
      },
      postRequest: async (endpoint, body) => {
        const url = `${config.public.apiBase}${endpoint}`;
        const headers = { accept: "application/json", "Content-Type": "application/json" };

        const { data } = await useFetch(url, { method: "POST", body: { ...body }, headers });
        return data.value;
      }
    }
  };
});
