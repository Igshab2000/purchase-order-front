import type { TFirstStepForm, TSecondStepForm, TThirdStepForm } from 'formTypes';
import { createContext } from 'react';

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
