import { Blocks } from '../../@types/block';
export interface IBlockPresenter {
    block: Blocks;
    onUpdateBlock: (data: Blocks) => void;
    onCopyBlock: (data: Blocks) => void;
    onRemoveBlock: () => void;
    list: {
        label: string;
        value: string;
    }[];
}
