import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LeaveRequestT } from "@/types";


type LeaveState = {
  requests: LeaveRequestT[];
};

const initialState: LeaveState = {
  requests: [],
};

const leaveSlice = createSlice({
  name: "leave",
  initialState,
  reducers: {
    addLeaveRequest: (state, action: PayloadAction<LeaveRequestT>) => {
      state.requests.push(action.payload);
    },
  },
});

export const { addLeaveRequest } = leaveSlice.actions;

export { leaveSlice };
