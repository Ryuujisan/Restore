import { createApi, } from '@reduxjs/toolkit/query/react'
import {Product} from "../../app/models/product"
import { baseQueryErrorHandling } from '../../app/api/baseApi';
export const catalogApi = createApi({
    reducerPath: 'catalogApi',
    baseQuery: baseQueryErrorHandling,
    endpoints: (builder) => ({
        fetchProducts: builder.query<Product[], void>({
            query: () => ({url: 'products'}),
        }),
        fetchProductDetails: builder.query<Product, number>({
            query: (id) => ({url: `products/${id}`}),
        })
    }),
});

export const {useFetchProductsQuery, useFetchProductDetailsQuery} = catalogApi