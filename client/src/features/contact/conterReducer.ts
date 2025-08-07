import { createSlice } from "@reduxjs/toolkit";

export type ConterState = {
    data:  number;
}

const initialState : ConterState = {
    data: 42
};

export const conterSlice = createSlice({
    name: 'conter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.data += action.payload;
        },
        decrement: (state, action) => {
            state.data -= action.payload;
        }
    }
})

export const {increment, decrement} = conterSlice.actions;
export function incrementLegacy(amount = 1) {
    return {
        type: 'increment',
        payload: amount
    }
}

export function decrementLegacy(amount = 1) {
    return {
        type: 'decrement',
        payload: amount
    }
}

export default function conterReducer(state = initialState, 
                                      action: {type: string, payload: number}) {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                data: state.data + action.payload
            }
        case 'decrement':
            return {
                ...state,
                data: state.data - action.payload
            }
        default:
            return state;
    }
}