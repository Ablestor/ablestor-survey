import { SelectableOption } from '../../@types/block';

export interface SelectorProps<T = SelectableOption[]> {
  items: T;
  selectedIndex?: number; // index of selected item
  onChange?: (index: number) => void;
}

export interface OptionProps {
  isChecked: boolean;
}

export interface OptionEditorProps<T = SelectableOption[]> {
  items: T;
  onChange?: (update: T) => void;
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
  onChange?: (value: number) => void;
}
