import React, { ReactElement } from 'react';
import { IBlockPresenter } from './type';
export declare const BlockPresenter: <T extends IBlockPresenter>({ block }: T) => React.ReactElement<T, string | React.JSXElementConstructor<any>>;
