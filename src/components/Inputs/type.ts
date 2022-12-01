import { FilePondErrorDescription, FilePondFile } from 'filepond';

export interface SelectorProps<V extends number | string> {
  items: { label: string; value: V }[];
  selectedIndex?: number;
  onChange?: (value: V, index: number) => void;
}

export interface OptionProps {
  isChecked: boolean;
}

export interface OptionEditorProps {
  options: string[];
  onChange?: (options: string[]) => void;
}

export interface CheckBoxProps {
  shape: 'square' | 'circle';
  value: boolean;
  onChange?: (value: boolean) => void;
}

export interface SwitchProps {
  width?: number;
  disabled?: boolean;
  value?: boolean;
  onChange?: (value: boolean) => void;
}

export interface RangeSelectorProps {
  min: number;
  max: number;
  value: number;
  onChange?: (value: number) => void;
}

export interface FileUploaderProps {
  files: string[];
  multiple: boolean;
  onAddFile?: (file: FilePondFile) => void;
  onRemoveFile?: (file: FilePondFile) => void;
  onError?: (error: FilePondErrorDescription, file: FilePondFile | undefined) => void;
}
