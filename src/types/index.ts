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
}

export type LeaveRequestT = {
    id: number;
    name: string;
    leaveType: "Sick" | "Casual" | "Earned and Paid";
    startDate: string;
    endDate: string;
  };