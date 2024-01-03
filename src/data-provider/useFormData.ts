import { useContext } from 'react';
import type { TFirstStepForm, TSecondStepForm, TThirdStepForm } from 'formTypes';
import { DataContext, type TData } from './DataContext';

export type TStepData = TFirstStepForm | TSecondStepForm | TThirdStepForm;
export type TKeyData = keyof TData;

export const useFormData = (): { data: TData; setDataForm: (key: TKeyData, stepData: TStepData) => void } => {
  const { data, setData } = useContext(DataContext);

  const setDataForm = (key: TKeyData, stepData: TStepData) => {
    const newData = { ...data, [key]: stepData };

    setData(newData);
  };

  return { data, setDataForm };
};
