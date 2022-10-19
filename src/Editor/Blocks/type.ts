import { Blocks, BlockType } from '../../@types/block';

export interface IBlockPresenter {
  block: Blocks;
  onUpdateBlock: (data: Blocks) => void;
  onCopyBlock: (data: Blocks) => void;
  onRemoveBlock: () => void;
  listSub?: boolean;
  list?: BlockType[];
}
