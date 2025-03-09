import { configureStore } from "@reduxjs/toolkit";
import { toastSlice } from "@/reducers/globalToast";
import { leaveSlice } from "@/reducers/leaveRequest";

export const store = configureStore({
  reducer: {
    toast: toastSlice.reducer,
    leave: leaveSlice.reducer
  },
});

// Generate Infer type from store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
