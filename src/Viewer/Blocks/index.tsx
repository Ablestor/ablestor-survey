import React, { ReactElement } from 'react';
import { DatePickerComponent, TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import dayjs from 'dayjs';
import classnames from 'classnames';

import { DATETIME } from '../../constants/format';
import { BlockTypes } from '../../@types/block';
import { IBlockPresenter } from './type';

import { BlockContainer } from './styled';
import {
  Input,
  Textarea,
  Select,
  Switch,
  RangeSelector,
  OptionMultipleSelector,
  OptionSingleSelector,
  CheckBox,
} from '../../components/Inputs';
import { Description, Text, Title } from '../../components/Texts';
import { FlexContainer, FlexElement, Row } from '../../components/Section';
import { defaultTheme } from '../..';

export const BlockPresenter = <T extends IBlockPresenter>({ block }: T): ReactElement<T> => {
  return (
    <BlockContainer
      className={classnames({
        required: block.required,
      })}>
      <Row>
        <FlexContainer>
          {block.required && (
            <FlexElement width={7}>
              <Title style={{ color: defaultTheme.main }}>*</Title>
            </FlexElement>
          )}
          <FlexElement width={'flex'}>{block.title}</FlexElement>
        </FlexContainer>
      </Row>
      <Row>
        <Description>{block.description}</Description>
      </Row>
      {block.type === BlockTypes.SHORT_TEXT && (
        <Row>
          <Input placeholder={'이 곳에 입력해주세요.'} />
        </Row>
      )}
      {block.type === BlockTypes.LONG_TEXT && (
        <Row>
          <Textarea placeholder={'이 곳에 입력해주세요.'} />
        </Row>
      )}
      {block.type === BlockTypes.SWITCH && (
        <Row>
          <FlexContainer>
            <FlexElement width={'flex'}>
              <Text>{block.format.options[0]}</Text>
            </FlexElement>
            <FlexElement width={40}>
              <Switch />
            </FlexElement>
          </FlexContainer>
        </Row>
      )}
      {block.type === BlockTypes.CHECK_BOX && (
        <Row>
          <FlexContainer>
            <FlexElement width={'flex'}>
              <Text>{block.format.options[0]}</Text>
            </FlexElement>
            <FlexElement width={40}>
              <CheckBox shape={'square'} value={false} />
            </FlexElement>
          </FlexContainer>
        </Row>
      )}
      {block.type === BlockTypes.SINGLE_SELECT && (
        <Row>
          <OptionSingleSelector options={block.format.options} />
        </Row>
      )}
      {block.type === BlockTypes.MULTI_SELECT && (
        <Row>
          <OptionMultipleSelector options={block.format.options} />
        </Row>
      )}
      {block.type === BlockTypes.DROPDOWN && (
        <Row>
          <Select items={block.format.options.map(option => ({ label: option, value: option }))} />
        </Row>
      )}
      {/* {block.type === BlockTypes.FILE_UPLOAD && (
        <Row>
          <FileUploader
            files={block.answer}
            multiple={block.multiple}
            onAddFile={file => onFileUpload && onFileUpload(file)}
            onRemoveFile={file => onFileRemove && onFileRemove(file)}
            onError={error => console.error(error)}
          />
        </Row>
      )} */}
      {block.type === BlockTypes.RANGE && (
        <>
          <Row>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <Text>{block.format.minTitle}</Text>
              <Text>{block.format.maxTitle}</Text>
            </div>
            <RangeSelector min={block.format.min} max={block.format.max} value={block.format.min} />
          </Row>
        </>
      )}
      {block.type === BlockTypes.DATE && (
        <Row>
          <Text>날짜를 선택해주세요.</Text>
          <FlexElement width={170}>
            <Text>준비중입니다.</Text>
            {/* <DatePickerComponent
              format={DATETIME.DateDisplay}
              value={new Date(block.answer)}
              onChange={({ value }: { value: string }) => {
                const date = dayjs(value).format(DATETIME.DateValue);
                onUpdateBlock({ ...block, answer: date });
              }}
            /> */}
          </FlexElement>
        </Row>
      )}
      {block.type === BlockTypes.TIME && (
        <Row>
          <Text>시간을 선택해주세요.</Text>
          <FlexElement width={170}>
            <Text>준비중입니다.</Text>
            {/* <TimePickerComponent
              format={DATETIME.TimeDisplay}
              value={new Date(block.answer)}
              onChange={({ value }: { value: string }) => {
                const date = dayjs(value).format(DATETIME.TimeValue);
                onUpdateBlock({ ...block, answer: date });
              }}
            /> */}
          </FlexElement>
        </Row>
      )}
    </BlockContainer>
  );
};
