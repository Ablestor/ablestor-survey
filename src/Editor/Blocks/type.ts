import { Blocks, SelectableOption } from '../../@types/block';

export interface IBlockPresenter {
  block: Blocks;
  onUpdateBlock: (data: Blocks) => void;
  onCopyBlock: (data: Blocks) => void;
  onRemoveBlock: () => void;
  list: SelectableOption[];
}
