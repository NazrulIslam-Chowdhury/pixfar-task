import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (limit) => `products?limit=${limit}`,
    }),
    searchProducts: builder.query({
      query: (searchTerm) => `products/category/${searchTerm}`,
    }),
  }),
});

export const { useGetProductsQuery, useSearchProductsQuery } = apiSlice;
