import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OrderState {
    orders: Array<{ id: string; item: string; quantity: number }>;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: OrderState = {
    orders: [],
    status: 'idle',
    error: null,
};

const orderCreateSlice = createSlice({
    name: 'orderCreate',
    initialState,
    reducers: {
        createOrderStart(state) {
            state.status = 'loading';
        },
        createOrderSuccess(state, action: PayloadAction<{ id: string; item: string; quantity: number }>) {
            state.status = 'succeeded';
            state.orders.push(action.payload);
        },
        createOrderFailure(state, action: PayloadAction<string>) {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const { createOrderStart, createOrderSuccess, createOrderFailure } = orderCreateSlice.actions;

export default orderCreateSlice.reducer;