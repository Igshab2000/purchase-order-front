import type { FC } from 'react';
import { useEffect, useCallback } from 'react';
import { useFormData } from 'data-provider/useFormData';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { TSecondStepForm } from 'formTypes';
import { InputField } from 'components/fields/InputField/InputField';
import { Button } from 'components/Button/Button';
import { EInputType } from 'components/Input/Input.types';
import styles from './SecondStep.module.scss';
import { useSecondFormValidation } from './SecondStep.utils';

const SecondStep: FC = () => {
  const { data, setDataForm } = useFormData();
  const history = useHistory();
  const formSchema = useSecondFormValidation();

  const { handleSubmit, reset, control, formState } = useForm<TSecondStepForm>({
    mode: 'all',
    shouldFocusError: true,
    resolver: yupResolver(formSchema),
    defaultValues: data.secondStep,
  });

  useEffect(() => {
    if (data.secondStep) {
      reset(data.secondStep);
    }
  }, [data.secondStep, reset]);

  const handleForward = useCallback(() => {
    handleSubmit((formData: TSecondStepForm) => {
      setDataForm('secondStep', formData);
      history.push('./third');
    })();
  }, [handleSubmit, history, setDataForm]);

  const handleBackward = useCallback(() => {
    history.push('./');
  }, [history]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <InputField name="fullName" control={control} labelContent="ФИО заказчика" placeholder="Введите значение" />
        <InputField
          name="phone"
          control={control}
          labelContent="Телефон заказчика"
          placeholder="Введите значение"
          inputType={EInputType.phoneInput}
        />
        <InputField name="carBrand" control={control} labelContent="Марка авто" placeholder="Введите значение" />
        <InputField name="licensePlate" control={control} labelContent="Гос номер" placeholder="Введите значение" />
        <InputField
          name="yearManufacture"
          control={control}
          labelContent="Год выпуска"
          placeholder="Введите значение"
          type="number"
        />
        <InputField name="vin" control={control} labelContent="VIN" placeholder="Введите значение" />
        <InputField
          name="mileage"
          control={control}
          labelContent="Пробег"
          placeholder="Введите значение"
          type="number"
        />
      </div>
      <div className={styles.buttons}>
        <Button buttonText="Назад" onClick={handleBackward} />
        <Button buttonText="Вперед" onClick={handleForward} disabled={!formState.isDirty || !formState.isValid} />
      </div>
    </div>
  );
};

export default SecondStep;
