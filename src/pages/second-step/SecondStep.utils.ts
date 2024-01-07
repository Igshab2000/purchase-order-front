import type { TSecondStepForm } from 'formTypes';
import { fioRegexp, licensePlateRegexp, phoneRegexp, vinRegexp } from 'regexps';
import type { SchemaOf } from 'yup';
import { object as objectSchema, string as stringSchema, number as numberSchema } from 'yup';

export const useSecondFormValidation = (): SchemaOf<TSecondStepForm> => {
  return objectSchema({
    fullName: stringSchema().required('Поле является обязательным').matches(fioRegexp, 'Неверный формат данных'),
    carBrand: stringSchema().required('Поле является обязательным'),
    phone: stringSchema().required('Поле является обязательным').matches(phoneRegexp, 'Неверный формат данных'),
    licensePlate: stringSchema()
      .required('Поле является обязательным')
      .matches(licensePlateRegexp, 'Неверный формат данных'),
    yearManufacture: numberSchema().required('Поле является обязательным'),
    mileage: numberSchema().required('Поле является обязательным'),
    vin: stringSchema().required('Поле является обязательным').matches(vinRegexp, 'Неверный формат данных'),
  });
};
