import { TiTrash } from 'react-icons/ti';

import { BlockTypes } from '../../@types/block';

import { IBlockPresenter } from './types';
import { BlockContainer, Row } from '../Section';
import { Input, Select } from '../Inputs';
import { IconButton } from '../Buttons';

import { createBlock } from '../../helpers/generator';
import { Text } from '../Texts';
import { getNameFromBlockType } from '../../helpers/converter';

export const BlockPresenter = ({ block, onUpdateBlock, onRemoveBlock }: IBlockPresenter) => {
  const isTypedBlock = block.type !== BlockTypes.BLANK;

  return (
    <BlockContainer>
      <div style={{ flex: 1 }}>
        <Text>
          {isTypedBlock ? getNameFromBlockType(block.type) : '아래에서 설문 유형을 선택해주세요.'}
        </Text>
        {!isTypedBlock && (
          <>
            <Select
              onChange={({ target }) => {
                const type = target.value.toLowerCase() as BlockTypes;
                onUpdateBlock(createBlock(type, 0));
              }}>
              {Object.keys(BlockTypes).map((type, i) => (
                <option key={i} value={type}>
                  {getNameFromBlockType(type.toLowerCase() as BlockTypes)}
                </option>
              ))}
            </Select>
          </>
        )}
        {isTypedBlock && (
          <>
            <Input
              placeholder={'제목을 입력해주세요.'}
              onChange={({ target }) => onUpdateBlock({ ...block, title: target.value })}
            />
            <Input
              placeholder={'설명을 입력해주세요.'}
              onChange={({ target }) => onUpdateBlock({ ...block, description: target.value })}
            />
          </>
        )}
      </div>
      <Row>
        <div style={{ textAlign: 'right', marginBottom: 20 }}>
          <IconButton icon={<TiTrash />} onClick={onRemoveBlock} />
        </div>
      </Row>
    </BlockContainer>
  );
};
