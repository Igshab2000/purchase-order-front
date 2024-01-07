import type { CheckboxProps } from 'components/Checkbox/Checkbox.types';
import type { Control, FieldValues, Path } from 'react-hook-form';

export type TCheckboxFieldProps<FormModel extends FieldValues> = Omit<CheckboxProps, 'name'> &
  Readonly<{
    name: Path<FormModel>;
    control: Control<FormModel>;
  }>;
