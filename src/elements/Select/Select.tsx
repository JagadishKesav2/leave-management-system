import {
  FormControl,
  Select as MuiSelect,
  FormHelperText,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";
import { get } from "lodash";
import { AppSelectOption, AppSelectProps } from "./Select.types";

export const Select = <
  FormFieldTypes extends FieldValues,
  AppSelectionOptions extends AppSelectOption[] = AppSelectOption[],
>({
  name,
  label,
  control,
  options,
  errors,
  ...props
}: AppSelectProps<FormFieldTypes, AppSelectionOptions>) => {
  const errorMessages = get(errors, name);
  const hasError = !!(errors && errorMessages);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <MuiSelect
            name={name}
            onChange={onChange}
            value={value || ""}
            label={label}
            aria-labelledby={`field-label-${name}`}
            error={hasError}
            {...props}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                <span> {option.label}</span>
              </MenuItem>
            ))}
          </MuiSelect>
          <FormHelperText>{errorMessages?.message?.toString()}</FormHelperText>
        </FormControl>
      )}
    />
  );
};
