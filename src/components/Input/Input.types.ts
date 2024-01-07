import type { ChangeEventHandler, FocusEventHandler } from 'react';

export type TInputValueType = string | readonly string[] | number;

export enum EInputType {
  input = 'input',
  phoneInput = 'phoneInput',
}

export type InputProps = Readonly<{
  /**
   * Имя инпута
   */
  name?: string;

  /**
   * Цсс классы
   */
  className?: string;

  /**
   * Значение инпута
   */
  value?: TInputValueType;

  /**
   * HTML5 тип инпута
   */
  type?: 'text' | 'password' | 'number' | 'search' | 'email' | 'tel' | 'url';

  /**
   * Обязательность поля
   */
  required?: boolean;

  /**
   * Автозаполнение
   */
  autoComplete?: 'on' | 'off';

  /**
   * Выключение инпута
   */
  disabled?: boolean;

  /**
   * Содержимое лейбла
   */
  labelContent?: string;

  /**
   * Заглушка
   */
  placeholder?: string;
  /**
   * Текст ошибки
   */
  error?: string;
  /**
   * Тип кастомного инпута (обычный или с маской телефона)
   */
  inputType?: EInputType;

  /**
   * Обработчик изменений
   * @param event
   */
  onChange?: (value: string) => void;

  /**
   * Обработчик фокуса
   */
  onFocus?: FocusEventHandler<HTMLInputElement>;

  /**
   * Обработчик потери фокуса
   */
  onBlur?: FocusEventHandler<HTMLInputElement>;
}>;

export type ExcludedKeys = 'onChange' | 'onFocus' | 'onBlur' | 'value' | 'disabled' | 'readOnly';
export type ChildrenProps = Omit<InputProps, ExcludedKeys>;
