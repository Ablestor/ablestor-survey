import React, { ReactElement } from 'react';
import { IconButtonProps } from './type';
export declare const Button: <T extends React.ButtonHTMLAttributes<HTMLButtonElement>>(props: T) => React.ReactElement<T, string | React.JSXElementConstructor<any>>;
export declare const IconButton: <T extends IconButtonProps>({ icon, text, active, onClick, }: T) => React.ReactElement<T, string | React.JSXElementConstructor<any>>;
