import type { FocusEventHandler, KeyboardEventHandler } from 'react';

export type CheckboxProps = Readonly<{
  /**
   * Отображаемый текст
   */
  label?: string;

  /**
   * html атрибут name
   */
  name?: string;

  /**
   * Текущее значение чекбокса
   * @default undefined
   */
  value?: boolean;

  /**
   * Частично выделенный (точкой)
   */
  semiChecked?: boolean;

  /**
   * Выключение чекбокса
   * @default false
   */
  disabled?: boolean;

  /**
   * Класс div-контейнера компонента
   */
  className?: string;

  /**
   * Класс контейнера
   */
  wrapperClassName?: string;
  /**
   * Класс label-элемента
   */
  labelClassName?: string;
  /**
   * Обработчик клавиатуры
   */
  onKeyUp?: KeyboardEventHandler<HTMLLabelElement>;

  /**
   * Обработчик нажатия на Enter (если чекбокс в фокусе)
   */
  onPressEnter?: KeyboardEventHandler<HTMLLabelElement>;

  /**
   * Нативная всплывающая подсказка при наведении
   */
  title?: string;

  /**
   * Подсказка снизу от поля ввода
   */
  hint?: string;

  /**
   * Режим только для чтения
   * @default false
   */
  readOnly?: boolean;

  /**
   * Текущее состояние чекбокса
   * @default false
   */
  checked?: boolean;
  /**
   * Обработчик изменений
   * @param event
   */
  onChange?: (value: boolean) => void;
  /**
   * Обработчик потери фокуса
   */
  onBlur?: FocusEventHandler<HTMLInputElement>;
}>;
