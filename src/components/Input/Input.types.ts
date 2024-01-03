import type { ChangeEventHandler, FocusEventHandler } from 'react';

export type TInputValueType = string | readonly string[] | number;

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
   * Наличие лейбла
   */
  isLabel?: boolean;

  /**
   * Содержимое лейбла
   */
  labelContent?: string;

  /**
   * Заглушка
   */
  placeholder?: string;
  /**
   * Обработчик изменений
   * @param event
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;

  /**
   * Обработчик фокуса
   */
  onFocus?: FocusEventHandler<HTMLInputElement>;

  /**
   * Обработчик потери фокуса
   */
  onBlur?: FocusEventHandler<HTMLInputElement>;
}>;
