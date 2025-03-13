import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TextField } from "@/elements/TextField";
import { showToast } from "@/reducers/globalToast";
import { MOCKED_TOKEN_KEY } from "@/constants";
import { loginSchema, LoginSchemaProps } from "./Authentication.schema";
import { useAuthentication } from "./Authentication.api";

export const Authentication = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate, isPending } = useAuthentication();

  const form = useForm<LoginSchemaProps>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const handleSignIn = (formData: LoginSchemaProps) => {
    mutate(formData, {
      onSuccess: ({ token }) => {
        localStorage.setItem(MOCKED_TOKEN_KEY, token);
        dispatch(
          showToast({
            message: "Logged In Successfully!!!",
            type: "success",
          })
        );
        navigate("/login");
      },
      onError: (error) => {
        dispatch(
          showToast({
            message: error.message,
            type: "error",
          })
        );
      },
    });
  };

  return (
    <Container maxWidth="xs">
      <Stack alignItems="center" justifyContent="center" minHeight="100vh">
        <Stack
          alignItems="center"
          spacing={2}
          border="1px solid"
          p={2}
          width="100%"
        >
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <Box width="100%" component="form">
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              type="email"
              name="email"
              control={form.control}
              errors={form.formState.errors}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              name="password"
              control={form.control}
              errors={form.formState.errors}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={form.handleSubmit(handleSignIn)}
              sx={{ mt: 2 }}
              type="submit"
              disabled={!form.formState.isValid || isPending}
            >
              {isPending ? "Logging In ...." : "Login"}
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};
