export type TFirstStepForm = {
  // Компания
  institution: string;
};

export type TSecondStepForm = {
  // Полное имя заказчика
  fullName: string;
  // Телефон заказчика
  phone: string;
  // Марка авто
  carBrand: string;
  // Гос номер
  licensePlate: string;
  // Год выпуска
  yearManufacture: number;
  // VIN
  vin: string;
  // Пробег
  mileage: number;
};

export type TWorkList = {
  // Наименование работы
  workTitle: string;
  // Количество
  count: number;
  // Сумма
  price: number;
};

export type TPartsList = {
  // Наименование детали
  partName: string;
  // Количество
  count: number;
  // Сумма
  price: number;
};

export type TThirdStepForm = {
  // Дефолтный список работ
  isDefaultList: boolean;
  // Список работ
  workList?: Array<TWorkList>;
  // Список запчастей
  partsList?: Array<TPartsList>;
};
