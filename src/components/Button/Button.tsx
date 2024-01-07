import type { FC } from 'react';
import type { IButtonProps } from './Button.types';
import styles from './Button.module.scss';

export const Button: FC<IButtonProps> = ({ buttonText, className, disabled, onClick }: IButtonProps) => {
  const disabledClassName = disabled ? styles.disabled : '';

  return (
    <button
      type="button"
      className={`${styles.button} ${className ?? ''} ${disabledClassName}`}
      onClick={onClick}
      disabled={disabled}>
      {buttonText}
    </button>
  );
};
