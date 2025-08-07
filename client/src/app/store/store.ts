﻿import {configureStore, createStore, legacy_createStore} from "@reduxjs/toolkit";
import conterReducer, { conterSlice } from "../../features/contact/conterReducer";
import { useDispatch, useSelector } from "react-redux";
import { catalogApi } from "../../features/catalog/catalogApi";
import { uiSlice } from "../layout/uiSlice";

export function  configureTheStore() {
    return legacy_createStore(conterReducer);
}

export const store = configureStore({
    reducer: {
        [catalogApi.reducerPath]: catalogApi.reducer,
        conter: conterSlice.reducer, 
        ui: uiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(catalogApi.middleware),
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()