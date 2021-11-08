import React, { ReactElement } from 'react';
import { IBlockPresenter } from './type';
export declare const BlockPresenter: <T extends IBlockPresenter>({ block, onFileUpload, onFileRemove, onUpdateBlock, }: T) => React.ReactElement<T, string | React.JSXElementConstructor<any>>;
