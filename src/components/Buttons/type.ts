import { ReactNode } from 'react';

export interface IconButtonProps {
  icon: ReactNode;
  text?: string;
  onClick: () => void;
}
