import { InferType, object, string } from "yup";

export const loginSchema = object({
  email: string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  password: string().required("Please enter your password"),
});

export type LoginSchemaProps = InferType<typeof loginSchema>;
