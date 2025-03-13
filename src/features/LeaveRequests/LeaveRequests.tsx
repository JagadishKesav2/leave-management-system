import { useSelector } from "react-redux";
import { Card, CardContent, Typography, Grid2, Stack } from "@mui/material";
import { RootState } from "@/store";

export const LeaveRequests = () => {
  const requests = useSelector((state: RootState) => state.leave.requests);

  return (
    <Stack>
      <Typography variant="h4">Leave Requests (Render data from redux)</Typography>
      {requests.length === 0 ? (
        <Typography>No leave requests yet.</Typography>
      ) : (
        <Stack direction="row" spacing={2} mt={5}>
          {requests.map((request, index) => (
            <Grid2 container spacing={4} justifyContent="start" key={index}>
              <Grid2
                columns={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                }}
              >
                <Card sx={{ marginBottom: 2 }}>
                  <CardContent>
                    <Typography variant="h6">{request.name}</Typography>
                    <Typography>Leave Type: {request.leaveType}</Typography>
                    <Typography>
                      Duration:{" "}
                      {new Date(request.startDate).toLocaleDateString()} to{" "}
                      {new Date(request.endDate).toLocaleDateString()}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
            </Grid2>
          ))}
        </Stack>
      )}
    </Stack>
  );
};
