import { useController, type FieldValues } from 'react-hook-form';
import { Checkbox } from 'components/Checkbox/Checkbox';
import type { TCheckboxFieldProps } from './CheckboxField.types';

export const CheckboxField = <FormModel extends FieldValues>(props: TCheckboxFieldProps<FormModel>) => {
  const { name, control, ...rest } = props;
  const { field } = useController({ name, control });

  return <Checkbox {...field} {...rest} />;
};
