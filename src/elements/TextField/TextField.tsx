import { FormControl } from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";
import { get } from "lodash";
import { FormInputProps } from "./TextField.types";
import { CustomTextField } from "./TextField.styles";

export const TextField = <TFormValues extends FieldValues>({
  name,
  errors,
  control,
  formControlSXProps,
  ...props
}: FormInputProps<TFormValues>) => {
  const errorMessages = get(errors, name);
  const hasError = !!(errors && errorMessages);

  return (
    <FormControl fullWidth sx={{ ...formControlSXProps }}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ...field } }) => (
          <CustomTextField
            {...field}
            error={hasError}
            helperText={errorMessages?.message?.toString()}
            type="text"
            onChange={onChange}
            value={value || ""}
            {...props}
          />
        )}
      />
    </FormControl>
  );
};
