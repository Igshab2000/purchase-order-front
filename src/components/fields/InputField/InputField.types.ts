import type { InputProps } from 'components/Input/Input.types';
import type { Control, FieldValues, Path } from 'react-hook-form';

export type TInputFieldProps<FormModel extends FieldValues> = Omit<InputProps, 'name'> &
  Readonly<{
    name: Path<FormModel>;
    control: Control<FormModel>;
  }>;
