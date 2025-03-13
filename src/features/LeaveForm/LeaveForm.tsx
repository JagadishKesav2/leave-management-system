import { Button, Container, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addLeaveRequest } from "@/reducers/leaveRequest";
import { leaveFormSchema, LeaveFormSchema } from "./LeaveForm.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@/elements/TextField";
import { Select } from "@/elements/Select/Select";
import { LEAVE_TYPE } from "@/constants";
import { showToast } from "@/reducers/globalToast";

export const LeaveForm = () => {
  const dispatch = useDispatch();
  const form = useForm<LeaveFormSchema>({
    resolver: yupResolver(leaveFormSchema),
    mode: "onChange",
  });

  const handleSubmit = (formData: LeaveFormSchema) => {
    dispatch(
      addLeaveRequest({
        name: formData.name,
        leaveType: formData.leaveType,
        startDate: new Date(formData.startDate).toISOString(), // Convert to string
        endDate: new Date(formData.endDate).toISOString(), // Convert to string
      })
    );
    dispatch(
      showToast({
        message: "Leave Updated Successfully!!!",
        type: "success",
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Typography variant="h4">Apply for Leave</Typography>
      <form>
        <Stack spacing={2} mt={5}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            control={form.control}
            errors={form.formState.errors}
          />
          <Select
            label="Leave Type"
            aria-placeholder="sdfsd"
            name="leaveType"
            control={form.control}
            errors={form.formState.errors}
            options={LEAVE_TYPE}
            fullWidth
          />
          <Stack direction="row" spacing={2}>
            <TextField
              label="Start Date"
              name="startDate"
              type="date"
              fullWidth
              margin="normal"
              slotProps={{ inputLabel: { shrink: true } }}
              control={form.control}
              errors={form.formState.errors}
            />
            <TextField
              label="End Date"
              name="endDate"
              type="date"
              fullWidth
              margin="normal"
              slotProps={{ inputLabel: { shrink: true } }}
              control={form.control}
              errors={form.formState.errors}
            />
          </Stack>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2, width: "5rem" }}
            onClick={form.handleSubmit(handleSubmit)}
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
};
