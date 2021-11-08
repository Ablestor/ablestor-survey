import React, { ReactElement } from 'react';
import { IBlockPresenter } from './type';
export declare const BlockPresenter: <T extends IBlockPresenter>({ block, onUpdateBlock, onCopyBlock, onRemoveBlock, }: T) => React.ReactElement<T, string | React.JSXElementConstructor<any>>;
