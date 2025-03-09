import { Snackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { clearToast } from "@/reducers/globalToast";

export const Toast = () => {
  const dispatch = useDispatch();
  const { message, type } = useSelector((state: RootState) => state.toast);

  const handleClose = () => {
    dispatch(clearToast());
  };

  return (
    <Snackbar
      open={Boolean(message)}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity={type || "info"} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
