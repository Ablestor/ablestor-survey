import { DatePickerComponent, TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import dayjs from 'dayjs';

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
} from '../../components/Inputs';
import { Description, Text, Title } from '../../components/Texts';
import { FlexContainer, FlexElement, Row } from '../../components/Section';
import { DATETIME } from '../../constants/format';

export const BlockPresenter = ({ block, onUpdateBlock }: IBlockPresenter) => {
  return (
    <BlockContainer>
      <Row>
        <Title>{block.title}</Title>
      </Row>
      <Row>
        <Description>{block.description}</Description>
      </Row>
      {block.type === BlockTypes.SHORT_TEXT && (
        <Row>
          <Input
            placeholder={'이 곳에 입력해주세요.'}
            onChange={({ target }) => onUpdateBlock({ ...block, answer: target.value })}
          />
        </Row>
      )}
      {block.type === BlockTypes.LONG_TEXT && (
        <Row>
          <Textarea
            placeholder={'이 곳에 입력해주세요.'}
            onChange={({ target }) => onUpdateBlock({ ...block, answer: target.value })}
          />
        </Row>
      )}
      {block.type === BlockTypes.SINGLE_SELECT && (
        <Row>
          <OptionSingleSelector
            items={block.question}
            value={block.answer || null}
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
            selectedIndex={block.question.findIndex(q => q.key === block.answer)}
            onChange={index => {
              const questionKey = block.question[index].key;

              onUpdateBlock({ ...block, answer: questionKey });
            }}
          />
        </Row>
      )}
      {block.type === BlockTypes.FILE_UPLOAD && (
        <Row>
          <FlexContainer>
            <FlexElement width={'flex'}>
              <Text>여러 파일 업로드 허용</Text>
            </FlexElement>
            <FlexElement width={40}>
              <Switch
                value={block.multiple}
                onChange={multiple => {
                  onUpdateBlock({ ...block, multiple });
                }}
              />
            </FlexElement>
          </FlexContainer>
        </Row>
      )}
      {block.type === BlockTypes.RANGE && (
        <>
          <Row>
            <RangeSelector
              min={block.min}
              max={block.max}
              onChange={answer => onUpdateBlock({ ...block, answer })}
            />
          </Row>
          <Row>
            <FlexContainer>
              <FlexElement width={120}>
                <Text>최소 값 타이틀</Text>
              </FlexElement>
              <FlexElement width={'flex'}>
                <Input
                  placeholder={'ex) 부족함'}
                  onChange={({ target }) => onUpdateBlock({ ...block, minTitle: target.value })}
                />
              </FlexElement>
            </FlexContainer>
            <FlexContainer>
              <FlexElement width={120}>
                <Text>최댓 값 타이틀</Text>
              </FlexElement>
              <FlexElement width={'flex'}>
                <Input
                  placeholder={'ex) 만족함'}
                  onChange={({ target }) => onUpdateBlock({ ...block, maxTitle: target.value })}
                />
              </FlexElement>
            </FlexContainer>
          </Row>
        </>
      )}
      {block.type === BlockTypes.DATE && (
        <Row>
          <FlexContainer>
            <FlexElement width={'flex'}>
              <Text>날짜를 입력해주세요.</Text>
            </FlexElement>
            <FlexElement width={200}>
              <DatePickerComponent
                format={DATETIME.DateDisplay}
                value={new Date(block.answer)}
                onChange={({ value }: { value: string }) => {
                  const date = dayjs(value).format(DATETIME.DateValue);
                  onUpdateBlock({ ...block, answer: date });
                }}
              />
            </FlexElement>
          </FlexContainer>
        </Row>
      )}
      {block.type === BlockTypes.TIME && (
        <Row>
          <FlexContainer>
            <FlexElement width={'flex'}>
              <Text>시간을 입력해주세요.</Text>
            </FlexElement>
            <FlexElement width={200}>
              <TimePickerComponent
                format={DATETIME.TimeDisplay}
                value={new Date(block.answer)}
                onChange={({ value }: { value: string }) => {
                  const date = dayjs(value).format(DATETIME.TimeValue);
                  onUpdateBlock({ ...block, answer: date });
                }}
              />
            </FlexElement>
          </FlexContainer>
        </Row>
      )}
    </BlockContainer>
  );
};
