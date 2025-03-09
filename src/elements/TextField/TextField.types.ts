import { Control, FieldErrors, FieldValues, Path } from 'react-hook-form';
import { SxProps, TextFieldProps } from '@mui/material';

export type FormInputProps<TFormValues extends FieldValues> = {
    name: Path<TFormValues>;
    errors?: FieldErrors<TFormValues>;
    control?: Control<TFormValues>;
    formControlSXProps?: SxProps;
} & TextFieldProps;
