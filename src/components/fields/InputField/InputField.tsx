import { useController, type FieldValues } from 'react-hook-form';
import { Input } from 'components/Input/Input';
import type { TInputFieldProps } from './InputField.types';

export const InputField = <FormModel extends FieldValues>(props: TInputFieldProps<FormModel>) => {
  const { name, control, ...rest } = props;
  const { field, fieldState } = useController({ name, control });
  const errorMessage = fieldState?.error?.message;

  return <Input {...field} {...rest} error={errorMessage} />;
};
