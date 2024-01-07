import type { ChangeEvent, ForwardRefExoticComponent, ForwardedRef, RefAttributes } from 'react';
import { forwardRef, useMemo } from 'react';
import InputMask from 'react-input-mask';
import { EInputType, type ChildrenProps, type InputProps } from './Input.types';
import styles from './Input.module.scss';
import { getUnmaskedValue } from './utils';

const mask = '+7 (999) 999-99-99';

export const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>> = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    const { value, type, name, className, onChange, required, inputType, error, labelContent, ...rest } = props;

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.value ?? '');
      }
    };

    const handleInputMaskChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        const inputValue = e.target.value ?? '';
        const unmaskedValue = getUnmaskedValue(inputValue, mask, '_');
        if (unmaskedValue === '') {
          onChange('');
        } else {
          onChange(inputValue);
        }
      }
    };

    const memoizedInput = useMemo(() => {
      return (
        <input
          ref={ref}
          value={value}
          id={name}
          name={name}
          onChange={handleInputChange}
          className={`${styles.input} ${error ? styles['input-error'] : ''}`}
          type={type}
          required={required}
          {...rest}
        />
      );
    }, [className, name, ref, required, rest, type, value]);

    const memoizedPhoneInput = useMemo(() => {
      return (
        <InputMask mask={mask} maskChar="_" {...rest} onChange={handleInputMaskChange}>
          {(inputProps: ChildrenProps) => {
            return <input {...inputProps} ref={ref} className={`${styles.input} ${className}`} />;
          }}
        </InputMask>
      );
    }, [ref, rest]);

    const memoizedInputLabel = useMemo(() => {
      return <span className={styles.label}>{labelContent}</span>;
    }, [labelContent]);

    const memoizedInputError = useMemo(() => {
      if (error) {
        return <span className={styles.error}>{error}</span>;
      }

      return null;
    }, [error]);

    return (
      <div className={`${styles.wrapper}  ${className}`}>
        {labelContent && memoizedInputLabel}
        {inputType === EInputType.phoneInput ? memoizedPhoneInput : memoizedInput}
        {memoizedInputError}
      </div>
    );
  }
);

Input.defaultProps = {
  inputType: EInputType.input,
};
