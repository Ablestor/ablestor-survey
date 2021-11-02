import {
  useState,
  useEffect,
  useRef,
  InputHTMLAttributes,
  KeyboardEvent,
  AreaHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import update from 'immutability-helper';
import { v4 as uniqid } from 'uuid';
import { TiArrowSortedDown, TiTimes } from 'react-icons/ti';

import { IconButton } from '../Buttons';
import { RoundSection, FlexContainer, FlexElement } from '../Section';
import { Text } from '../Texts';

import {
  SelectorProps,
  OptionEditorProps,
  OptionSelectorProps,
  RangeSelectorProps,
  SwitchProps,
} from './type';
import {
  StyledInput,
  StyledTextarea,
  StyledSelect,
  StyledSwitch,
  StyledCheckBox,
  StyledRangeContainer,
} from './styled';
import { useClickAway } from '../../hooks';

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => <StyledInput {...props} />;

export const Textarea = (props: InputHTMLAttributes<HTMLTextAreaElement>) => (
  <StyledTextarea {...props} />
);

export const Select = ({ items, selectedIndex, onChange }: SelectorProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [listVisible, setListVisible] = useState(false);
  const [index, setIndex] = useState<number>(selectedIndex || 0);

  useClickAway(selectRef, () => setListVisible(false));

  return (
    <StyledSelect ref={selectRef} onClick={() => setListVisible(true)}>
      <div className={'select-current-value'}>
        <Text>{items[index]?.label ?? '목록에서 선택해주세요.'}</Text>
        <div className={'select-icon'}>
          <TiArrowSortedDown />
        </div>
      </div>
      {listVisible && (
        <div className={'select-options-container'}>
          {items.map((item, index) => (
            <div
              className={`select-options${selectedIndex === item.value ? ' selected' : ''}`}
              key={item.key}
              onClick={e => {
                e.stopPropagation();
                setIndex(index);
                onChange && onChange(index);
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
  const appendItem = (value: string) =>
    onChange && onChange([...items, { key: uniqid(), label: value, value }]);
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

export const OptionMultipleSelector = ({
  items,
  value,
  onChange,
}: OptionSelectorProps<'multiple'>) => {
  const [checked, setChecked] = useState<string[]>(value);

  return (
    <div>
      {items.map((item, index) => {
        const hasChecked = checked.includes(item.key as string);
        return (
          <FlexContainer
            key={index}
            onClick={() => {
              if (hasChecked) {
                setChecked(checked.filter(v => v !== (item.key as string)));
              } else {
                setChecked([...checked, item.key as string]);
              }
              onChange && onChange(checked);
            }}>
            <FlexElement width={40}>
              <StyledCheckBox className={hasChecked ? 'active' : ''} />
            </FlexElement>
            <FlexElement width={'flex'}>
              <Text>{item.value}</Text>
            </FlexElement>
          </FlexContainer>
        );
      })}
    </div>
  );
};

export const OptionSingleSelector = ({ items, value, onChange }: OptionSelectorProps<'single'>) => {
  const [checked, setChecked] = useState<string | null>(value);

  return (
    <div>
      {items.map((item, index) => {
        const hasChecked = checked === item.key;
        return (
          <FlexContainer
            key={index}
            onClick={() => {
              setChecked(item.key);
              onChange && onChange(checked);
            }}>
            <FlexElement width={40}>
              <StyledCheckBox className={hasChecked ? 'active' : ''} />
            </FlexElement>
            <FlexElement width={'flex'}>
              <Text>{item.value}</Text>
            </FlexElement>
          </FlexContainer>
        );
      })}
    </div>
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

export const RangeSelector = ({ min, max, onChange }: RangeSelectorProps) => {
  return <StyledRangeContainer></StyledRangeContainer>;
};
