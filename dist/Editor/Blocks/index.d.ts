import { ReactElement } from 'react';
import { IBlockPresenter } from './type';
export declare const BlockPresenter: <T extends IBlockPresenter>({ block, onUpdateBlock, onCopyBlock, onRemoveBlock, }: T) => ReactElement<T, string | import("react").JSXElementConstructor<any>>;
