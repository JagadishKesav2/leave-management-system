import { LEAVE_TYPE } from "@/constants";

export type ToastState = {
  message: string | null;
  type: "success" | "error" | null;
};

export type JWTPayload = {
  email: string;
  exp: number;
  iat: number;
};

export type UserT = {
  email: string;
  password: string;
  name: string;
  role: string;
  phone: number;
  address: string;
};

export type LeaveTypeT = (typeof LEAVE_TYPE)[number]["value"]

export type LeaveRequestT = {
  name: string;
  leaveType: LeaveTypeT;
  startDate: Date | string;
  endDate: Date | string;
};
