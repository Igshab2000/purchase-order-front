import type { FC } from 'react';
import type { IButtonProps } from './Button.types';
import styles from './Button.module.scss';

export const Button: FC<IButtonProps> = ({ buttonText, className, onClick }: IButtonProps) => {
  return (
    <button type="button" className={`${styles.button} ${className ?? ''}`} onClick={onClick}>
      {buttonText}
    </button>
  );
};
