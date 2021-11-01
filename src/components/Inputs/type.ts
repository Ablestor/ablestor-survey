import { SelectableOption } from '../../@types/block';

export interface SelectorProps<T = SelectableOption[]> {
  items: T;
  onChange?: (select: SelectableOption) => void;
  value: SelectableOption['value'];
}

export interface OptionProps {
  isChecked: boolean;
}

export interface OptionEditorProps<T = SelectableOption[]> {
  items: T;
  onChange?: (select: T) => void;
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
  onMinChange?: (value: number) => void;
  onMaxChange?: (value: number) => void;
}
