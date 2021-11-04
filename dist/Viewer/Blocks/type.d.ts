import { FilePondFile } from 'filepond';
import { Blocks } from '../../@types/block';
export interface IBlockPresenter {
    block: Blocks;
    onFileUpload?: (file: FilePondFile) => void;
    onFileRemove?: (file: FilePondFile) => void;
    onUpdateBlock: (data: Blocks) => void;
}
