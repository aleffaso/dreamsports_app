import { MouseEventHandler, ReactNode } from 'react';

export type BarListType = {
  color: string;
  icon: ReactNode;
  onClick?: () => void;
};
