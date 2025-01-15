import { configureStore } from "@reduxjs/toolkit";
import orderCreateReducer from "../features/order-create/orderCreateSlice";
import orderSelectedReducer from "../features/order-create/orderSelectedSlice"

export const store = configureStore({
  reducer: {
    orderCreate: orderCreateReducer,
    orderSelected: orderSelectedReducer
  },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
