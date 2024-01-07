import type { TThirdStepForm, TWorkList, TPartsList } from 'formTypes';
import type { SchemaOf } from 'yup';
import { array, object as objectSchema, string as stringSchema, number as numberSchema } from 'yup';

export const useThirdFormValidation = (): SchemaOf<Omit<TThirdStepForm, 'isDefaultList'>> => {
  // @ts-ignore
  const workList: SchemaOf<TWorkList> = objectSchema({
    workTitle: stringSchema().required('Поле является обязательным'),
    count: numberSchema().required('Поле является обязательным'),
    price: numberSchema().required('Поле является обязательным'),
  });

  // @ts-ignore
  const partsList: SchemaOf<TPartsList> = objectSchema({
    partName: stringSchema().required('Поле является обязательным'),
    count: numberSchema().required('Поле является обязательным'),
    price: numberSchema().required('Поле является обязательным'),
  });

  return objectSchema({
    partsList: array().of(partsList).notRequired(),
    workList: array().of(workList).notRequired(),
  });
};
