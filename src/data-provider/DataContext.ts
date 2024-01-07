import { createContext } from 'react';
import type { TFirstStepForm, TSecondStepForm, TThirdStepForm } from 'formTypes';

export type TDataContext = {
  data: TData;
  setData: (data: TData) => void;
};

export type TData = {
  firstStep?: TFirstStepForm;
  secondStep?: TSecondStepForm;
  thirdStep?: TThirdStepForm;
};

export const DataContext = createContext<TDataContext>({
  data: {},
  setData: (_: TData) => {},
});
