import type { ForwardRefExoticComponent, ForwardedRef, RefAttributes } from 'react';
import { forwardRef, useMemo } from 'react';
import type { InputProps } from './Input.types';
import styles from './Input.module.scss';

export const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>> = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    const { value, type, name, onChange, onFocus, onBlur, className, required, isLabel, labelContent, ...rest } = props;

    const memoizedInput = useMemo(() => {
      return (
        <input
          ref={ref}
          value={value}
          id={name}
          name={name}
          className={`${styles.input} ${className}`}
          type={type}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          required={required}
          {...rest}
        />
      );
    }, [className, name, onBlur, onChange, onFocus, ref, required, rest, type, value]);

    const memoizedInputLabel = useMemo(() => {
      return <span className={styles.label}>{labelContent}</span>;
    }, [labelContent]);

    return (
      <div className={styles.wrapper}>
        {isLabel && memoizedInputLabel}
        {memoizedInput}
      </div>
    );
  }
);
