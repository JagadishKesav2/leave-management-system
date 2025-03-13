import { SelectProps as MuiSelectProps } from "@mui/material";
import { Control, FieldErrors, FieldValues, Path } from "react-hook-form";

export type AppSelectOption = {
  readonly label: string;
  readonly value: string;
};

export type AppSelectProps<
  FormFieldTypes extends FieldValues,
  AppSelectOptions extends AppSelectOption[],
  Value = unknown,
> = {
  name: Path<FormFieldTypes>;
  lable?: string;
  control?: Control<FormFieldTypes, object>;
  options: Readonly<AppSelectOptions>;
  isFormControl?: boolean;
  errors?: FieldErrors<FormFieldTypes>;
} & MuiSelectProps<Value>;
