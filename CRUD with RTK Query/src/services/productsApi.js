import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",

  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),

  tagTypes: ["Product"],

  endpoints: (builder) => ({
    //? for getting/reading data perpose => "builder.query"
    getProducts: builder.query({
      query: () => "products",
      //? provide tags only used for builder.query
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Product", id })),
              { type: "Product", id: "LIST" },
            ]
          : [{ type: "Product", id: "LIST" }],
    }),

    //? for updating and deleting data perpose "builder.mutation"
    deleteProducts: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      //? "invalidatesTags" only used for builder.mutation
      invalidatesTags: (results, error, id) => [{ type: "Product", id: id }],
    }),

    createaProduct: builder.mutation({
      query: (body) => ({
        url: "products/",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),

    updateProduct: builder.mutation({
      query: ({ id, newUpdatedProduct }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: newUpdatedProduct,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Product", id: id }],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useDeleteProductsMutation,
  useCreateaProductMutation,
  useUpdateProductMutation,
} = productsApi; // this is usable hook
