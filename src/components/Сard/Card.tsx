import type { FC } from 'react';
import { Button } from 'components/Button/Button';
import type { ICardProps } from './Card.types';
import styles from './Card.module.scss';

export const Card: FC<ICardProps> = (props: ICardProps) => {
  const { title, imgSrc, isSelected, onClick } = props;
  const buttonText = isSelected ? 'Отменить' : 'Выбрать';

  return (
    <div className={`${styles.wrapper} ${isSelected ? styles['is-selected'] : ''}`}>
      <div className={styles['wrapper-img']}>
        <img src={imgSrc} alt={title} width={60} height={60} />
      </div>
      <div className={styles.title}>{title}</div>
      <Button buttonText={buttonText} onClick={onClick} />
    </div>
  );
};
