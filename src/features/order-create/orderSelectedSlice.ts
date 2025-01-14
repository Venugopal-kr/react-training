import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LineOrder } from '../../models/models';


interface order {
    selectedOrder: LineOrder | null
}
const initialState: order = {
    selectedOrder: null
}

const orderSlice = createSlice({
    name: 'orderSelected',
    initialState,
    reducers: {
        selectOrder(state, action: PayloadAction<LineOrder>) {
            state.selectedOrder = action.payload;
        },
        clearOrder(state) {
            state.selectedOrder = null;
        },
    },
});

export const { selectOrder, clearOrder } = orderSlice.actions;

export default orderSlice.reducer;