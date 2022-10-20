import { FilePondErrorDescription, FilePondFile } from 'filepond';
import { SelectableOption } from '../../@types/block';

export interface SelectorProps<T = SelectableOption[]> {
  items: T;
  selectedIndex?: number;
  onChange?: (value: SelectableOption, index: number) => void;
}

export interface OptionProps {
  isChecked: boolean;
}

export interface OptionEditorProps<T = SelectableOption[]> {
  items: T;
  onChange?: (update: T) => void;
}

export interface CheckBoxProps {
  shape: 'square' | 'circle';
  value: boolean;
  onChange?: (value: boolean) => void;
}

type SelectMode = 'multiple' | 'single';

export interface OptionSelectorProps<
  M extends SelectMode,
  I = SelectableOption,
  S = M extends 'multiple' ? string[] : string | null,
> {
  items: I[];
  value: S;
  onChange?: (select: S) => void;
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
