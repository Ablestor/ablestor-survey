import { SelectableOption } from '../../@types/block';

export interface OptionProps {
  isChecked: boolean;
}

export interface OptionEditorProps<T = SelectableOption[]> {
  items: T;
  onChange: (select: T) => void;
}
