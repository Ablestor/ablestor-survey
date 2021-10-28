import { TiTrash, TiTabsOutline, TiTick, TiTickOutline } from 'react-icons/ti';

import { BlockTypes } from '../../@types/block';

import { IBlockPresenter } from './type';
import { BlockButtonSection, BlockContainer } from './styled';
import { Input, Select, OptionEditor } from '../Inputs';
import { IconButton } from '../Buttons';
import { Text } from '../Texts';
import { VerticalDivider } from '../Section';

import { createBlock } from '../../helpers/generator';
import { getNameFromBlockType } from '../../helpers/converter';

export const BlockPresenter = ({
  block,
  onUpdateBlock,
  onCopyBlock,
  onRemoveBlock,
}: IBlockPresenter) => {
  const isTypedBlock = block.type !== BlockTypes.BLANK;

  return (
    <BlockContainer>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold' }}>
            {isTypedBlock ? getNameFromBlockType(block.type) : '설문 유형을 선택해주세요.'}
          </Text>
        </div>
        <div style={{ textAlign: 'right' }}>
          <Select
            style={{ width: 200 }}
            onChange={({ target }) => {
              const type = target.value.toLowerCase() as BlockTypes;
              const newBlock = createBlock(type, 0);

              onUpdateBlock({
                ...newBlock,
                title: block.title,
                description: block.description,
                required: block.required,
              });
            }}>
            {Object.keys(BlockTypes).map((type, i) => (
              <option key={i} value={type}>
                {getNameFromBlockType(type.toLowerCase() as BlockTypes)}
              </option>
            ))}
          </Select>
        </div>
      </div>
      <div>
        {isTypedBlock && (
          <>
            <Input
              placeholder={'제목을 입력해주세요.'}
              value={block.title}
              defaultValue={block.title}
              onChange={({ target }) => onUpdateBlock({ ...block, title: target.value })}
            />
            <Input
              placeholder={'설명을 입력해주세요.'}
              value={block.description}
              defaultValue={block.description}
              onChange={({ target }) => onUpdateBlock({ ...block, description: target.value })}
            />
          </>
        )}
        {(block.type === BlockTypes.SINGLE_SELECT || block.type === BlockTypes.MULTI_SELECT) && (
          <OptionEditor
            items={block.question}
            onChange={question => onUpdateBlock({ ...block, question })}
          />
        )}
      </div>
      <BlockButtonSection>
        <IconButton
          icon={block.required ? <TiTick /> : <TiTickOutline />}
          text={block.required ? '필수 입력' : '선택 입력'}
          onClick={() => onUpdateBlock({ ...block, required: !block.required })}
        />
        <IconButton icon={<TiTabsOutline />} onClick={() => onCopyBlock(block)} />
        <VerticalDivider />
        <IconButton icon={<TiTrash />} onClick={onRemoveBlock} />
      </BlockButtonSection>
    </BlockContainer>
  );
};
