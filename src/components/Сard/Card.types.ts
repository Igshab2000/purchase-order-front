import type { ReactNode } from 'react';

export interface ICardProps {
  title?: string;
  imgSrc?: string;
  isSelected?: boolean;
  onClick?: () => void;
}
