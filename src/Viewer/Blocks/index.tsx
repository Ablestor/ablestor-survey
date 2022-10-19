import React, { ReactElement } from 'react';
import { DatePickerComponent, TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import dayjs from 'dayjs';
import classnames from 'classnames';

import Colors from '../../constants/colors';
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
  FileUploader,
  CheckBox,
} from '../../components/Inputs';
import { Description, Text, Title } from '../../components/Texts';
import { FlexContainer, FlexElement, Row } from '../../components/Section';

export const BlockPresenter = <T extends IBlockPresenter>({
  block,
  onFileUpload,
  onFileRemove,
  onUpdateBlock,
}: T): ReactElement<T> => {
  return (
    <BlockContainer
      className={classnames({
        required: block.required,
      })}>
      <Row>
        <FlexContainer>
          {block.required && (
            <FlexElement width={7}>
              <Title style={{ color: Colors.main }}>*</Title>
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
          <Input
            defaultValue={block.answer}
            placeholder={'이 곳에 입력해주세요.'}
            onChange={({ target }) => onUpdateBlock({ ...block, answer: target.value })}
          />
        </Row>
      )}
      {block.type === BlockTypes.LONG_TEXT && (
        <Row>
          <Textarea
            defaultValue={block.answer}
            placeholder={'이 곳에 입력해주세요.'}
            onChange={({ target }) => onUpdateBlock({ ...block, answer: target.value })}
          />
        </Row>
      )}
      {block.type === BlockTypes.SWITCH && (
        <Row>
          <FlexContainer>
            <FlexElement width={'flex'}>
              <Text>{block.switchTitle}</Text>
            </FlexElement>
            <FlexElement width={40}>
              <Switch
                value={block.answer}
                onChange={answer => onUpdateBlock({ ...block, answer })}
              />
            </FlexElement>
          </FlexContainer>
        </Row>
      )}
      {block.type === BlockTypes.CHECK_BOX && (
        <Row>
          <FlexContainer>
            <FlexElement width={'flex'}>
              <Text>{block.checkboxTitle}</Text>
            </FlexElement>
            <FlexElement width={40}>
              <CheckBox
                shape={'square'}
                value={block.answer}
                onChange={answer => onUpdateBlock({ ...block, answer })}
              />
            </FlexElement>
          </FlexContainer>
        </Row>
      )}
      {block.type === BlockTypes.SINGLE_SELECT && (
        <Row>
          <OptionSingleSelector
            items={block.question}
            value={block.answer}
            onChange={answer => onUpdateBlock({ ...block, answer })}
          />
        </Row>
      )}
      {block.type === BlockTypes.MULTI_SELECT && (
        <Row>
          <OptionMultipleSelector
            items={block.question}
            value={block.answer}
            onChange={answer => onUpdateBlock({ ...block, answer })}
          />
        </Row>
      )}
      {block.type === BlockTypes.DROPDOWN && (
        <Row>
          <Select
            items={block.question}
            selectedIndex={block.question.findIndex(item => item.value === block.answer)}
            onChange={({ key }) => onUpdateBlock({ ...block, answer: key })}
          />
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
            {/* <FlexContainer> */}
            <FlexElement width={140}>
              <Text>{block.minTitle}</Text>
            </FlexElement>
            <FlexElement width={'flex'}>
              <RangeSelector
                min={block.min}
                max={block.max}
                value={block.answer || 1}
                onChange={answer => onUpdateBlock({ ...block, answer })}
              />
            </FlexElement>
            <FlexElement
              width={140}
              style={{
                textAlign: 'right',
              }}>
              <Text>{block.maxTitle}</Text>
            </FlexElement>
            {/* </FlexContainer> */}
          </Row>
        </>
      )}
      {block.type === BlockTypes.DATE && (
        <Row>
          <Text>날짜를 선택해주세요.</Text>
          <FlexElement width={170}>
            <DatePickerComponent
              format={DATETIME.DateDisplay}
              value={new Date(block.answer)}
              onChange={({ value }: { value: string }) => {
                const date = dayjs(value).format(DATETIME.DateValue);
                onUpdateBlock({ ...block, answer: date });
              }}
            />
          </FlexElement>
        </Row>
      )}
      {block.type === BlockTypes.TIME && (
        <Row>
          <Text>시간을 선택해주세요.</Text>
          <FlexElement width={170}>
            <TimePickerComponent
              format={DATETIME.TimeDisplay}
              value={new Date(block.answer)}
              onChange={({ value }: { value: string }) => {
                const date = dayjs(value).format(DATETIME.TimeValue);
                onUpdateBlock({ ...block, answer: date });
              }}
            />
          </FlexElement>
        </Row>
      )}
    </BlockContainer>
  );
};
