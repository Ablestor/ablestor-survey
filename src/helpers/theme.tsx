import { MutableRefObject, useRef } from 'react';

export const defaultTheme = {
  main: '#87132f',
  black: '#333',
  gray: '#ccc',
  lightGray: '#efefef',
};

export type Theme = Partial<typeof defaultTheme>;
export let themeRef: MutableRefObject<Theme> = { current: defaultTheme };

export function useTheme(theme: Theme): void {
  themeRef = useRef({ ...defaultTheme, ...theme });
}
