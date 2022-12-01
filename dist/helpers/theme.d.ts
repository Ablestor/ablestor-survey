import { MutableRefObject } from 'react';
export declare const defaultTheme: {
    main: string;
    black: string;
    gray: string;
    lightGray: string;
};
export declare type Theme = Partial<typeof defaultTheme>;
export declare let themeRef: MutableRefObject<Theme>;
export declare function useTheme(theme: Theme): void;
