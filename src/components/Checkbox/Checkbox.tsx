import { forwardRef, useRef } from 'react';
import type {
  ChangeEvent,
  ForwardRefExoticComponent,
  ForwardedRef,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react';
import { mergeRefs } from 'helpers/mergeRefs';
import { type CheckboxProps } from './Checkbox.types';
import styles from './Checkbox.module.scss';

export const Checkbox: ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>> = forwardRef(
  (props: CheckboxProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    const {
      label,
      name,
      value,
      semiChecked,
      disabled = false,
      labelClassName = '',
      onChange,
      onBlur,
      onKeyUp,
      onPressEnter,
      title,
      checked,
      readOnly,
      wrapperClassName,
    } = props;
    const inputRef = useRef<HTMLInputElement>(null);

    const toggleCheckbox = (): void => {
      if (!disabled) {
        inputRef?.current?.click?.();
      }
    };

    const keyUpHandler: KeyboardEventHandler<HTMLLabelElement> = (event) => {
      if (event.key === 'Enter') {
        toggleCheckbox();
        if (onPressEnter) {
          onPressEnter(event);
        }
      }
      onKeyUp?.(event);
    };

    const stopPropagation: MouseEventHandler<HTMLInputElement | HTMLDivElement | HTMLLabelElement> = (event) => {
      event.stopPropagation();
    };

    const onLabelClick: MouseEventHandler<HTMLInputElement | HTMLDivElement | HTMLLabelElement> = (event) => {
      event.preventDefault();
      if (inputRef.current && !(readOnly || disabled)) {
        inputRef.current.click();
      }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event.target.checked);
      }
    };

    return (
      <div className={`${styles.Checkbox}  ${wrapperClassName}`} onClick={stopPropagation}>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <label className={`${styles.label} ${labelClassName}`} onKeyUp={keyUpHandler} onClick={onLabelClick}>
          <input
            name={name}
            className={styles.input}
            checked={checked ?? !!value ?? false}
            value={value ? 'true' : 'false'}
            disabled={disabled}
            onChange={handleChange}
            onBlur={onBlur}
            type="checkbox"
            ref={mergeRefs([ref, inputRef])}
          />
          <div className={styles.fake_box} title={title}>
            {semiChecked && <span className={styles.dot} />}
          </div>
          {label && <span className={styles.text}>{label}</span>}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
