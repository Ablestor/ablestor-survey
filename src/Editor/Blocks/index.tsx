import { ReactElement, useState } from 'react';
import { TiTrash, TiTabsOutline, TiTick, TiTickOutline } from 'react-icons/ti';
import classnames from 'classnames';
import { v4 as uniqid } from 'uuid';

import { BlockTypes, SelectableOption } from '../../@types/block';

import { IBlockPresenter } from './type';
import { BlockButtonSection, BlockContainer } from './styled';
import { Input, Select, OptionEditor } from '../../components/Inputs';
import { IconButton } from '../../components/Buttons';
import { Text } from '../../components/Texts';
import { FlexContainer, FlexElement, Row, VerticalDivider } from '../../components/Section';

import { createBlock, getRange } from '../../helpers/generator';
import { getNameFromBlockType } from '../../helpers/converter';
import { blockList } from '../../constants/blocks';

const startAt = 2;
const minRange: SelectableOption[] = getRange(startAt).map(i => ({
  key: uniqid(),
  label: String(i),
  value: i,
}));

const maxRange: SelectableOption[] = getRange(9).map(i => ({
  key: uniqid(),
  label: String(startAt + i),
  value: startAt + i,
}));

export const BlockPresenter = <T extends IBlockPresenter>({
  block,
  onUpdateBlock,
  onCopyBlock,
  onRemoveBlock,
}: T): ReactElement<T> => {
  const isTypedBlock = block.type !== BlockTypes.BLANK;

  const [title, setTitle] = useState(block.title);
  const [description, setDescription] = useState(block.description);

  return (
    <BlockContainer
      className={classnames({
        required: block.required,
      })}>
      <FlexContainer>
        <FlexElement width={'flex'}>
          <Text style={{ fontWeight: 'bold' }}>
            {isTypedBlock
              ? getNameFromBlockType(block.type.toLowerCase() as BlockTypes)
              : '설문 유형을 선택해주세요.'}
          </Text>
        </FlexElement>
        <FlexElement width={220}>
          <Select
            items={blockList}
            selectedIndex={blockList.findIndex(b => b.value.toLowerCase() === block.type)}
            onChange={({ value }) => {
              const newBlock = createBlock(
                uniqid(),
                (value as string).toLowerCase() as BlockTypes,
                block.order,
              );

              onUpdateBlock({ ...newBlock, title, description });
            }}
          />
        </FlexElement>
      </FlexContainer>
      {isTypedBlock && (
        <>
          <Input
            placeholder={'제목을 입력해주세요.'}
            value={title}
            onChange={({ target }) => {
              const title = target.value;
              setTitle(title);
              onUpdateBlock({ ...block, title });
            }}
          />
          <Input
            placeholder={'설명을 입력해주세요.'}
            value={description}
            onChange={({ target }) => {
              const description = target.value;
              setDescription(description);
              onUpdateBlock({ ...block, description });
            }}
          />
        </>
      )}
      {(block.type === BlockTypes.SINGLE_SELECT ||
        block.type === BlockTypes.MULTI_SELECT ||
        block.type === BlockTypes.DROPDOWN) && (
        <Row>
          <OptionEditor
            items={block.question}
            onChange={question => onUpdateBlock({ ...block, question })}
          />
        </Row>
      )}
      {block.type === BlockTypes.SWITCH && (
        <Row>
          <Input
            defaultValue={block.switchTitle}
            placeholder={'스위치 타이틀'}
            onChange={({ target }) => onUpdateBlock({ ...block, switchTitle: target.value })}
          />
        </Row>
      )}
      {block.type === BlockTypes.CHECK_BOX && (
        <Row>
          <Input
            defaultValue={block.checkboxTitle}
            placeholder={'체크박스 타이틀'}
            onChange={({ target }) => onUpdateBlock({ ...block, checkboxTitle: target.value })}
          />
        </Row>
      )}
      {/* {block.type === BlockTypes.FILE_UPLOAD && (
        <Row>
          <FlexContainer>
            <FlexElement width={'flex'}>
              <Text>여러 파일 업로드 허용</Text>
            </FlexElement>
            <FlexElement width={40}>
              <Switch
                value={block.multiple}
                onChange={multiple => onUpdateBlock({ ...block, multiple })}
              />
            </FlexElement>
          </FlexContainer>
        </Row>
      )} */}
      {block.type === BlockTypes.RANGE && (
        <>
          <Row>
            <FlexContainer>
              <FlexElement width={60}>
                <Text>최소 값</Text>
              </FlexElement>
              <FlexElement width={'flex'}>
                <Select
                  items={minRange}
                  selectedIndex={minRange.findIndex(r => r.value === block.min)}
                  onChange={({ value }) => onUpdateBlock({ ...block, min: value as number })}
                />
              </FlexElement>
              <FlexElement width={60}>
                <Text>최대 값</Text>
              </FlexElement>
              <FlexElement width={'flex'}>
                <Select
                  items={maxRange}
                  selectedIndex={maxRange.findIndex(r => r.value === block.max)}
                  onChange={({ value }) => onUpdateBlock({ ...block, max: value as number })}
                />
              </FlexElement>
            </FlexContainer>
          </Row>
          <Row>
            <FlexContainer>
              <FlexElement width={120}>
                <Text>최소 값 타이틀</Text>
              </FlexElement>
              <FlexElement width={'flex'}>
                <Input
                  defaultValue={block.minTitle}
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
                  defaultValue={block.maxTitle}
                  placeholder={'ex) 만족함'}
                  onChange={({ target }) => onUpdateBlock({ ...block, maxTitle: target.value })}
                />
              </FlexElement>
            </FlexContainer>
          </Row>
        </>
      )}
      <BlockButtonSection>
        <IconButton
          icon={block.required ? <TiTick /> : <TiTickOutline />}
          text={block.required ? '필수 입력' : '선택 입력'}
          active={block.required}
          onClick={() => onUpdateBlock({ ...block, required: !block.required })}
        />
        <IconButton icon={<TiTabsOutline />} onClick={() => onCopyBlock(block)} />
        <VerticalDivider />
        <IconButton icon={<TiTrash />} onClick={onRemoveBlock} />
      </BlockButtonSection>
    </BlockContainer>
  );
};
