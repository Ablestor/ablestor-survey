import { Blocks } from '../../@types/block';

export interface IBlockPresenter {
  block: Blocks;
  onUpdateBlock: (data: Blocks) => void;
  onRemoveBlock: () => void;
}
