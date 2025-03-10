import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid2,
  Typography,
} from "@mui/material";
import { useGetLeavesInfo } from "./LeaveDashboard.api";

export const LeaveDashboard = () => {
  const { data, isPending } = useGetLeavesInfo();

  return (
    <>
      <Typography>Render data from mocked endpoint</Typography>
      <Grid2
        container
        spacing={4}
        justifyContent={isPending ? "center" : "start"}
        mt={5}
      >
        {isPending || !data ? (
          <CircularProgress />
        ) : (
          data.map(({ name, leaveType }, index) => (
            <Grid2
              columns={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
              key={index}
            >
              <Card>
                <CardContent>
                  <Typography variant="h6">{name}</Typography>
                  <Typography color="textSecondary">
                    Leave Type: {leaveType}
                  </Typography>
                  <Typography color="textSecondary">Status: Pending</Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Approve
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ mt: 2, ml: 1 }}
                  >
                    Reject
                  </Button>
                </CardContent>
              </Card>
            </Grid2>
          ))
        )}
      </Grid2>
    </>
  );
};
