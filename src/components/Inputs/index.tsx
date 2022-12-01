import {
  ReactElement,
  useState,
  useRef,
  InputHTMLAttributes,
  KeyboardEvent,
  useEffect,
} from 'react';
import update from 'immutability-helper';
import classnames from 'classnames';
import { v4 as uniqid } from 'uuid';
import { TiArrowSortedDown, TiTimes } from 'react-icons/ti';
import { FilePond } from 'react-filepond';
import { Range } from 'react-range';

import { useClickAway } from '../../hooks';
import { IconButton } from '../Buttons';
import { RoundSection, FlexContainer, FlexElement } from '../Section';
import { Text } from '../Texts';

import {
  SelectorProps,
  OptionEditorProps,
  RangeSelectorProps,
  SwitchProps,
  FileUploaderProps,
  CheckBoxProps,
} from './type';
import {
  StyledInput,
  StyledTextarea,
  StyledSelect,
  StyledSwitch,
  StyledCheckBox,
  StyledSelectorValueLabel,
  StyledSelectorThumb,
} from './styled';
import { defaultTheme } from '../..';

export const Input = <T extends InputHTMLAttributes<HTMLInputElement>>(
  props: T,
): ReactElement<T> => <StyledInput {...props} />;

export const Textarea = <T extends InputHTMLAttributes<HTMLTextAreaElement>>(
  props: T,
): ReactElement<T> => <StyledTextarea {...props} />;

export const Select = <V extends string | number>({
  items,
  selectedIndex,
  onChange,
}: SelectorProps<V>): ReactElement<SelectorProps<V>> => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [listVisible, setListVisible] = useState(false);
  const [selectIndex, setSelectIndex] = useState<number>(selectedIndex || 0);

  const selectedItem = items[selectIndex];

  useClickAway(selectRef, () => setListVisible(false));

  useEffect(() => {
    setSelectIndex(selectedIndex || 0);
  }, [selectedIndex]);

  // useEffect(() => {
  //   setSelectedItem(items[selectIndex]);
  // }, [selectIndex]);

  return (
    <StyledSelect ref={selectRef} onClick={() => setListVisible(true)}>
      <div className={'select-current-value'}>
        <Text>{selectedItem?.label ?? '목록에서 선택해주세요.'}</Text>
        <div className={'select-icon'}>
          <TiArrowSortedDown />
        </div>
      </div>
      {listVisible && (
        <div className={'select-options-container'}>
          {items.map((item, index) => (
            <div
              key={index}
              className={classnames({
                'select-options': true,
                selected: index === selectIndex,
              })}
              onClick={e => {
                e.stopPropagation();
                setSelectIndex(index);
                onChange && onChange(item.value, index);
                setListVisible(false);
              }}>
              {item.label}
            </div>
          ))}
        </div>
      )}
    </StyledSelect>
  );
};

export const OptionEditor = <T extends OptionEditorProps>({
  options,
  onChange,
}: T): ReactElement<T> => {
  const appendItem = (value: string) => onChange && onChange([...options, value]);
  const removeItem = (index: number) =>
    onChange && onChange(update(options, { $splice: [[index, 1]] }));

  return (
    <RoundSection>
      <Text style={{ fontWeight: 'bold' }}>선택 옵션</Text>
      {options.map((option, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 20 }}>
            <Text>{index + 1}.</Text>
          </div>
          <div style={{ flex: 1, margin: '0 10px' }}>
            <Input placeholder={`옵션 ${index}`} value={option} readOnly />
          </div>
          <div>
            <IconButton icon={<TiTimes />} onClick={() => removeItem(index)} />
          </div>
        </div>
      ))}
      <Input
        placeholder={'새로운 옵션 추가'}
        onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
          const target = e.target as HTMLInputElement;
          const value = target.value;

          if (e.key === 'Enter' && value) {
            appendItem(target.value);
            target.value = '';
            return;
          }
        }}
      />
    </RoundSection>
  );
};

export const CheckBox = <T extends CheckBoxProps>({
  shape,
  value,
  onChange,
}: T): ReactElement<T> => (
  <StyledCheckBox
    className={classnames({
      active: value,
      [shape]: true,
    })}
    value={value}
    shape={shape}
    onClick={() => onChange && onChange(!value)}
  />
);

export const OptionMultipleSelector = ({
  options,
}: {
  options: string[];
}): ReactElement<{
  options: string[];
}> => {
  return (
    <div>
      {options.map((option, index) => {
        return (
          <FlexContainer key={index}>
            <FlexElement width={40}>
              <StyledCheckBox
                className={classnames({ active: false })}
                shape={'square'}
                value={false}
              />
            </FlexElement>
            <FlexElement width={'flex'}>
              <Text>{option}</Text>
            </FlexElement>
          </FlexContainer>
        );
      })}
    </div>
  );
};

export const OptionSingleSelector = ({
  options,
}: {
  options: string[];
}): ReactElement<{ options: string[] }> => {
  return (
    <div>
      {options.map((option, index) => {
        return (
          <FlexContainer key={index}>
            <FlexElement width={40}>
              <StyledCheckBox
                className={classnames({ active: false })}
                shape={'circle'}
                value={false}
              />
            </FlexElement>
            <FlexElement width={'flex'}>
              <Text>{option}</Text>
            </FlexElement>
          </FlexContainer>
        );
      })}
    </div>
  );
};

export const Switch = <T extends SwitchProps>({
  width = 40,
  disabled,
  value: defaultValue,
  onChange,
}: T): ReactElement<T> => {
  const [value, setValue] = useState(defaultValue);

  return (
    <StyledSwitch
      width={width}
      value={value}
      onClick={() => {
        if (disabled) return;

        setValue(!value);
        onChange && onChange(!value);
      }}>
      <div className={'switch-button'} />
    </StyledSwitch>
  );
};

export const RangeSelector = <T extends RangeSelectorProps>({
  min,
  max,
  value,
  onChange,
}: T): ReactElement<T> => {
  const labelRef = useRef<HTMLDivElement>(null);
  const [labelVisible, setLabelVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  useClickAway(labelRef, () => {
    setLabelVisible(false);
  });

  return (
    <Range
      step={1}
      min={min}
      max={max}
      renderTrack={({ props, children }) => (
        <div
          key={min}
          {...props}
          style={{
            position: 'relative',
            width: '100%',
            height: '6px',
            borderRadius: '3px',
            backgroundColor: defaultTheme.lightGray,
          }}>
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <StyledSelectorThumb
          {...props}
          key={max}
          onMouseEnter={() => {
            if (!labelVisible) {
              setLabelVisible(true);
            }
          }}>
          {labelVisible && (
            <StyledSelectorValueLabel ref={labelRef}>
              <Text>{currentValue}</Text>
            </StyledSelectorValueLabel>
          )}
        </StyledSelectorThumb>
      )}
      values={[currentValue]}
      onChange={values => setCurrentValue(values[0])}
      onFinalChange={values => onChange && onChange(values[0])}
    />
  );
};

export const FileUploader = <T extends FileUploaderProps>({
  files,
  multiple,
  onAddFile,
  onRemoveFile,
  onError,
}: T): ReactElement<T> => (
  <FilePond
    files={files}
    allowMultiple={multiple}
    maxFiles={3}
    labelIdle={'클릭 또는 드래그를 통해 파일을 업로드 할 수 있습니다.'}
    onaddfile={(_, file) => onAddFile && onAddFile(file)}
    onremovefile={(_, file) => onRemoveFile && onRemoveFile(file)}
    onerror={(error, file) => onError && onError(error, file)}
  />
);
