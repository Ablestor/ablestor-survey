import { useState, useRef } from 'react';
import update from 'immutability-helper';
import classnames from 'classnames';
import { v4 as uniqid } from 'uuid';
import { TiArrowSortedDown, TiTimes } from 'react-icons/ti';
import { FilePond } from 'react-filepond';
import { Range } from 'react-range';
import Colors from '../../constants/colors';
import { useClickAway } from '../../hooks';
import { IconButton } from '../Buttons';
import { RoundSection, FlexContainer, FlexElement } from '../Section';
import { Text } from '../Texts';
import { StyledInput, StyledTextarea, StyledSelect, StyledSwitch, StyledCheckBox, StyledSelectorValueLabel, StyledSelectorThumb, } from './styled';
export const Input = (props) => <StyledInput {...props}/>;
export const Textarea = (props) => (<StyledTextarea {...props}/>);
export const Select = ({ items, selectedIndex, onChange }) => {
    const selectRef = useRef(null);
    const [listVisible, setListVisible] = useState(false);
    const [index, setIndex] = useState(selectedIndex || 0);
    useClickAway(selectRef, () => setListVisible(false));
    return (<StyledSelect ref={selectRef} onClick={() => setListVisible(true)}>
      <div className={'select-current-value'}>
        <Text>{items[index]?.label ?? '목록에서 선택해주세요.'}</Text>
        <div className={'select-icon'}>
          <TiArrowSortedDown />
        </div>
      </div>
      {listVisible && (<div className={'select-options-container'}>
          {items.map((item, index) => (<div className={classnames({
                    'select-options': true,
                    selected: selectedIndex === item.value,
                })} key={item.key} onClick={e => {
                    e.stopPropagation();
                    setIndex(index);
                    onChange && onChange(index);
                    setListVisible(false);
                }}>
              {item.label}
            </div>))}
        </div>)}
    </StyledSelect>);
};
export const OptionEditor = ({ items, onChange }) => {
    const appendItem = (value) => onChange && onChange([...items, { key: uniqid(), label: value, value }]);
    const removeItem = (index) => onChange && onChange(update(items, { $splice: [[index, 1]] }));
    return (<RoundSection>
      <Text style={{ fontWeight: 'bold' }}>선택 옵션</Text>
      {items.map(({ key, value }, index) => (<div key={key} style={{
                display: 'flex',
                alignItems: 'center',
            }}>
          <div style={{ width: 20 }}>
            <Text>{index + 1}.</Text>
          </div>
          <div style={{ flex: 1, margin: '0 10px' }}>
            <Input placeholder={`옵션 ${index}`} value={value} readOnly/>
          </div>
          <div>
            <IconButton icon={<TiTimes />} onClick={() => {
                removeItem(index);
            }}/>
          </div>
        </div>))}
      <Input placeholder={'새로운 옵션 추가'} onKeyUp={(e) => {
            const target = e.target;
            const value = target.value;
            if (e.key === 'Enter' && value) {
                appendItem(target.value);
                target.value = '';
                return;
            }
        }}/>
    </RoundSection>);
};
export const CheckBox = ({ shape, value, onChange }) => (<StyledCheckBox className={classnames({
        active: value,
        [shape]: true,
    })} value={value} shape={shape} onClick={() => onChange && onChange(!value)}/>);
export const OptionMultipleSelector = ({ items, value, onChange, }) => {
    const [checked, setChecked] = useState(value);
    return (<div>
      {items.map((item, index) => {
            const hasChecked = checked.includes(item.key);
            return (<FlexContainer key={index} onClick={() => {
                    if (hasChecked) {
                        const update = checked.filter(v => v !== item.key);
                        setChecked(update);
                        onChange && onChange(update);
                    }
                    else {
                        const update = [...checked, item.key];
                        setChecked(update);
                        onChange && onChange(update);
                    }
                }}>
            <FlexElement width={40}>
              <StyledCheckBox className={classnames({
                    active: hasChecked,
                })} shape={'square'} value={hasChecked}/>
            </FlexElement>
            <FlexElement width={'flex'}>
              <Text>{item.value}</Text>
            </FlexElement>
          </FlexContainer>);
        })}
    </div>);
};
export const OptionSingleSelector = ({ items, value, onChange }) => {
    const [checked, setChecked] = useState(value);
    return (<div>
      {items.map((item, index) => {
            const hasChecked = checked === item.key;
            return (<FlexContainer key={index} onClick={() => {
                    setChecked(item.key);
                    onChange && onChange(checked);
                }}>
            <FlexElement width={40}>
              <StyledCheckBox className={classnames({
                    active: hasChecked,
                })} shape={'circle'} value={hasChecked}/>
            </FlexElement>
            <FlexElement width={'flex'}>
              <Text>{item.value}</Text>
            </FlexElement>
          </FlexContainer>);
        })}
    </div>);
};
export const Switch = ({ width = 40, disabled, value: defaultValue, onChange }) => {
    const [value, setValue] = useState(defaultValue);
    return (<StyledSwitch width={width} value={value} onClick={() => {
            if (disabled)
                return;
            setValue(!value);
            onChange && onChange(!value);
        }}>
      <div className={'switch-button'}/>
    </StyledSwitch>);
};
export const RangeSelector = ({ min, max, value, onChange }) => {
    const labelRef = useRef(null);
    const [labelVisible, setLabelVisible] = useState(false);
    const [currentValue, setCurrentValue] = useState(value);
    useClickAway(labelRef, () => {
        setLabelVisible(false);
    });
    return (<Range step={1} min={min} max={max} renderTrack={({ props, children }) => (<div key={min} {...props} style={{
                width: '100%',
                height: '6px',
                borderRadius: '3px',
                backgroundColor: Colors.lightGray,
            }}>
          {children}
        </div>)} renderThumb={({ props }) => (<StyledSelectorThumb {...props} key={max} onMouseEnter={() => {
                if (!labelVisible) {
                    setLabelVisible(true);
                }
            }}>
          {labelVisible && (<StyledSelectorValueLabel ref={labelRef}>
              <Text>{currentValue}</Text>
            </StyledSelectorValueLabel>)}
        </StyledSelectorThumb>)} values={[currentValue]} onChange={values => setCurrentValue(values[0])} onFinalChange={values => onChange && onChange(values[0])}/>);
};
export const FileUploader = ({ files, multiple, onAddFile, onRemoveFile, onError, }) => (<FilePond files={files} allowMultiple={multiple} maxFiles={3} labelIdle={'클릭 또는 드래그를 통해 파일을 업로드 할 수 있습니다.'} onaddfile={(_, file) => onAddFile && onAddFile(file)} onremovefile={(_, file) => onRemoveFile && onRemoveFile(file)} onerror={(error, file) => onError && onError(error, file)}/>);