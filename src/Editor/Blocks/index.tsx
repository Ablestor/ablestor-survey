import { ReactElement, useState } from 'react';
import { TiTrash, TiTabsOutline, TiTick, TiTickOutline } from 'react-icons/ti';
import classnames from 'classnames';
import { v4 as uniqid } from 'uuid';

import { BlockTypes } from '../../@types/block';

import { IBlockPresenter } from './type';
import { BlockButtonSection, BlockContainer } from './styled';
import { Input, Select, OptionEditor } from '../../components/Inputs';
import { IconButton } from '../../components/Buttons';
import { Text } from '../../components/Texts';
import { FlexContainer, FlexElement, Row, VerticalDivider } from '../../components/Section';

import { createBlock, getRange } from '../../helpers/generator';
import { getNameFromBlockType } from '../../helpers/converter';

const startAt = 2;
const minRange = getRange(startAt).map(i => ({
  label: String(i),
  value: i,
}));
const maxRange = getRange(9).map(i => ({
  label: String(startAt + i),
  value: startAt + i,
}));

export const BlockPresenter = <T extends IBlockPresenter>({
  block,
  onUpdateBlock,
  onCopyBlock,
  onRemoveBlock,
  list,
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
            items={list}
            selectedIndex={list.findIndex(
              b => typeof b.value === 'string' && b.value.toLowerCase() === block.type,
            )}
            onChange={value => {
              const newBlock = createBlock(
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
            options={block.format.options}
            onChange={options => onUpdateBlock({ ...block, format: { ...block.format, options } })}
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
                  selectedIndex={minRange.findIndex(r => r.value === block.format.min)}
                  onChange={value =>
                    onUpdateBlock({ ...block, format: { ...block.format, min: value } })
                  }
                />
              </FlexElement>
              <FlexElement width={60}>
                <Text>최대 값</Text>
              </FlexElement>
              <FlexElement width={'flex'}>
                <Select
                  items={maxRange}
                  selectedIndex={maxRange.findIndex(r => r.value === block.format.max)}
                  onChange={value =>
                    onUpdateBlock({ ...block, format: { ...block.format, max: value } })
                  }
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
                  defaultValue={block.format.minTitle}
                  placeholder={'ex) 부족함'}
                  onChange={({ target }) =>
                    onUpdateBlock({ ...block, format: { ...block.format, minTitle: target.value } })
                  }
                />
              </FlexElement>
            </FlexContainer>
            <FlexContainer>
              <FlexElement width={120}>
                <Text>최댓 값 타이틀</Text>
              </FlexElement>
              <FlexElement width={'flex'}>
                <Input
                  defaultValue={block.format.maxTitle}
                  placeholder={'ex) 만족함'}
                  onChange={({ target }) =>
                    onUpdateBlock({ ...block, format: { ...block.format, maxTitle: target.value } })
                  }
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
