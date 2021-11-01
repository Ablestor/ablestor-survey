import { useState, useEffect, useRef, InputHTMLAttributes, KeyboardEvent } from 'react';
import update from 'immutability-helper';
import uniqid from 'uniqid';
import { TiArrowSortedDown, TiTimes } from 'react-icons/ti';

import { IconButton } from '../Buttons';
import { RoundSection, FlexContainer, FlexElement } from '../Section';
import { Text } from '../Texts';

import { SelectorProps, OptionEditorProps, RangeSelectorProps, SwitchProps } from './type';
import { StyledSelect, StyledInput, StyledSwitch } from './styled';
import { StyledRangeContainer } from '../Section/styled';
import { SelectableOption } from '../../@types/block';
import { useClickAway } from '../../hooks';

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => <StyledInput {...props} />;

export const Select = ({ items, value, onChange }: SelectorProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [listVisible, setListVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  useClickAway(selectRef, () => setListVisible(false));

  useEffect(() => {
    const currentValueLabel = items.find(item => item.value === value);

    if (currentValueLabel?.label) {
      setCurrentValue(currentValueLabel.label || '');
    }
  }, [items, value]);

  return (
    <StyledSelect ref={selectRef} onClick={() => setListVisible(true)}>
      <div className={'select-current-value'}>
        <Text>{currentValue}</Text>
        <div className={'select-icon'}>
          <TiArrowSortedDown />
        </div>
      </div>
      {listVisible && (
        <div className={'select-options-container'}>
          {items.map(item => (
            <div
              className={`select-options${value === item.value ? ' selected' : ''}`}
              key={item.key}
              onClick={e => {
                e.stopPropagation();
                onChange && onChange(item);
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

export const OptionEditor = ({ items, onChange }: OptionEditorProps) => {
  const appendItem = (value: string) => onChange && onChange([...items, { key: uniqid(), value }]);
  const removeItem = (index: number) =>
    onChange && onChange(update(items, { $splice: [[index, 1]] }));

  return (
    <RoundSection>
      <Text style={{ fontWeight: 'bold' }}>선택 옵션</Text>
      {items.map(({ key, value }, index) => (
        <div
          key={key}
          style={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <div style={{ width: 20 }}>
            <Text>{index + 1}.</Text>
          </div>
          <div style={{ flex: 1, margin: '0 10px' }}>
            <Input placeholder={`옵션 ${index}`} value={value} readOnly />
          </div>
          <div>
            <IconButton
              icon={<TiTimes />}
              onClick={() => {
                removeItem(index);
              }}
            />
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

export const Switch = ({ width = 40, disabled, value: defaultValue, onChange }: SwitchProps) => {
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

const startAt = 2;
const minRange: SelectableOption[] = [...Array(startAt).keys()].map(i => ({
  key: uniqid(),
  label: String(i),
  value: i,
}));
const maxRange: SelectableOption[] = [...Array(9).keys()].map(i => ({
  key: uniqid(),
  label: String(startAt + i),
  value: startAt + i,
}));

export const RangeSelector = ({ min, max, onMinChange, onMaxChange }: RangeSelectorProps) => {
  return (
    <StyledRangeContainer>
      <FlexContainer>
        <FlexElement width={50}>
          <Text>최소 값</Text>
        </FlexElement>
        <FlexElement width={'flex'}>
          <Select
            items={minRange}
            value={min}
            onChange={item => onMinChange && onMinChange(item.value as number)}
          />
        </FlexElement>
        <FlexElement width={50}>
          <Text>최대 값</Text>
        </FlexElement>
        <FlexElement width={'flex'}>
          <Select
            items={maxRange}
            value={max}
            onChange={item => onMaxChange && onMaxChange(item.value as number)}
          />
        </FlexElement>
      </FlexContainer>
    </StyledRangeContainer>
  );
};
