import { Blocks, BlockTypes } from '../@types/block';
export declare const createBlock: <T extends BlockTypes>(id: string, type: T, order: number) => Blocks;
export declare const getRange: (size: number) => number[];
