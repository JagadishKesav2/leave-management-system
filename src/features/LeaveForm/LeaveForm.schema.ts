import { LeaveTypeT } from "@/types";
import { date, InferType, mixed, object, string } from "yup";

export const leaveFormSchema = object({
  name: string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be at most 50 characters long"),
  leaveType: mixed<LeaveTypeT>()
    .default(null)
    .nullable()
    .defined()
    .required("Leave type is required"),
  startDate: date()
    .required("Start date is required")
    .min(new Date(), "Start date cannot be in the past"),
  endDate: date()
    .required("End date is required")
    .min(new Date(), "End date cannot be before the start date"),
});

export type LeaveFormSchema = InferType<typeof leaveFormSchema>;
