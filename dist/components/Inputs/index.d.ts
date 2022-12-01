import { ReactElement, InputHTMLAttributes } from 'react';
import { SelectorProps, OptionEditorProps, RangeSelectorProps, SwitchProps, FileUploaderProps, CheckBoxProps } from './type';
export declare const Input: <T extends InputHTMLAttributes<HTMLInputElement>>(props: T) => ReactElement<T, string | import("react").JSXElementConstructor<any>>;
export declare const Textarea: <T extends InputHTMLAttributes<HTMLTextAreaElement>>(props: T) => ReactElement<T, string | import("react").JSXElementConstructor<any>>;
export declare const Select: <V extends string | number>({ items, selectedIndex, onChange, }: SelectorProps<V>) => ReactElement<SelectorProps<V>, string | import("react").JSXElementConstructor<any>>;
export declare const OptionEditor: <T extends OptionEditorProps>({ options, onChange, }: T) => ReactElement<T, string | import("react").JSXElementConstructor<any>>;
export declare const CheckBox: <T extends CheckBoxProps>({ shape, value: _value, onChange, }: T) => ReactElement<T, string | import("react").JSXElementConstructor<any>>;
export declare const OptionMultipleSelector: ({ options, }: {
    options: string[];
}) => ReactElement<{
    options: string[];
}, string | import("react").JSXElementConstructor<any>>;
export declare const OptionSingleSelector: ({ options, }: {
    options: string[];
}) => ReactElement<{
    options: string[];
}, string | import("react").JSXElementConstructor<any>>;
export declare const Switch: <T extends SwitchProps>({ width, disabled, value: defaultValue, onChange, }: T) => ReactElement<T, string | import("react").JSXElementConstructor<any>>;
export declare const RangeSelector: <T extends RangeSelectorProps>({ min, max, value, onChange, }: T) => ReactElement<T, string | import("react").JSXElementConstructor<any>>;
export declare const FileUploader: <T extends FileUploaderProps>({ files, multiple, onAddFile, onRemoveFile, onError, }: T) => ReactElement<T, string | import("react").JSXElementConstructor<any>>;
