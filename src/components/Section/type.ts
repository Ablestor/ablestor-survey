import { HTMLAttributes } from 'react';

export type BaseSectionProps = HTMLAttributes<HTMLDivElement>;

export interface FlexConatinerProps extends BaseSectionProps {
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
}

export interface FlexElementProps extends BaseSectionProps {
  width: 'flex' | number;
}
export interface ThemeProps {
  color: string;
}
