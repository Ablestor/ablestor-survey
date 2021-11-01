import { ReactNode } from 'react';

export interface IconButtonProps {
  icon: ReactNode;
  text?: string;
  active?: boolean;
  onClick?: () => void;
}
