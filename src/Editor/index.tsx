import React, { ReactElement, useCallback, useState, useEffect, useMemo } from 'react';
import { DropResult, DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { TiPlus } from 'react-icons/ti';
import update from 'immutability-helper';

import { Blocks, BlockTypes } from '../@types/block';
import { ISurveyContent, ISurveyResult, AOrBISurveyEditor } from '../@types/editor';

import { RoundDashedSection, Row, SurveyContainer } from '../components/Section';
import { Input } from '../components/Inputs';
import { Button } from '../components/Buttons';
import { Text } from '../components/Texts';
import { BlockPresenter } from './Blocks';
import { ThemeProvider } from 'styled-components';
import { themeRef } from '../helpers/theme';
import { getNameFromBlockType } from '../helpers/converter';

const blockList = Object.values(BlockTypes);
const Editor = <T extends AOrBISurveyEditor>({
  submitButtonOptions,
  defaultValue,
  onChange,
  onSubmit,
  inputShow = true,
  whiteList,
  blackList,
}: T): ReactElement<T> => {
  const [surveyTitle, setSurveyTitle] = useState(defaultValue?.title || '');
  const [surveyDescription, setSurveyDescription] = useState(defaultValue?.description || '');
  const [surveyQuestions, setSurveyQuestions] = useState<ISurveyContent>(
    defaultValue?.questions || [],
  );

  const extractSurveyResult = useCallback(
    (): ISurveyResult => ({
      title: surveyTitle,
      description: surveyDescription,
      questions: surveyQuestions.filter(({ type }) => type !== BlockTypes.BLANK),
    }),
    [surveyTitle, surveyDescription, surveyQuestions],
  );

  const filterItem = useMemo(() => {
    const whiteBlockList = whiteList ? blockList.filter(b => whiteList.includes(b)) : blockList;
    const blackBlockList = blackList
      ? whiteBlockList.filter(b => !blackList.includes(b))
      : whiteBlockList;

    return blackBlockList.map(blackBlockList => ({
      label: getNameFromBlockType(blackBlockList),
      value: blackBlockList,
    }));
  }, [whiteList, blackList]);

  useEffect(() => {
    if (onChange) {
      onChange(extractSurveyResult());
    }
  }, [onChange, extractSurveyResult]);

  const addBlock = useCallback(() => {
    const order = surveyQuestions.length + 1;

    setSurveyQuestions(
      update(surveyQuestions, {
        $push: [{ format: {}, order, required: false, type: BlockTypes.BLANK }],
      }),
    );
  }, [surveyQuestions]);

  const onUpdateBlock = (index: number, data: Blocks) => {
    setSurveyQuestions(update(surveyQuestions, { [index]: { $set: data } }));
  };

  const onCopyBlock = (index: number, data: Blocks) => {
    setSurveyQuestions(
      update(surveyQuestions, {
        $splice: [[index, 0, data]],
      }),
    );
  };

  const onRemoveBlock = (index: number) => {
    setSurveyQuestions(
      update(surveyQuestions, {
        $splice: [[index, 1]],
      }),
    );
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    reorderBlocks(result.source.index, result.destination.index);
  };

  const reorderBlocks = (index: number, nextIndex: number) => {
    const reorderSurveyContent = Array.from(surveyQuestions);
    const [removed] = reorderSurveyContent.splice(index, 1);
    reorderSurveyContent.splice(nextIndex, 0, removed);

    setSurveyQuestions(reorderSurveyContent);
  };

  return (
    <ThemeProvider theme={{ ...themeRef.current }}>
      <SurveyContainer className='ablestor-survey'>
        {inputShow && (
          <Row>
            <Input
              placeholder={'설문 제목'}
              value={surveyTitle}
              onChange={({ target: { value } }) => setSurveyTitle(value)}
            />
            <Input
              placeholder={'설문 설명'}
              value={surveyDescription}
              onChange={({ target: { value } }) => setSurveyDescription(value)}
            />
          </Row>
        )}

        <Row>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='droppable'>
              {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {surveyQuestions.map((block, i) => (
                    <Draggable key={i} draggableId={String(i)} index={i}>
                      {provided => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}>
                          <BlockPresenter
                            list={filterItem}
                            key={i}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            block={block}
                            onUpdateBlock={data => onUpdateBlock(i, data)}
                            onCopyBlock={data => onCopyBlock(i, data)}
                            onRemoveBlock={() => onRemoveBlock(i)}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Row>
        <Row>
          <RoundDashedSection
            style={{
              textAlign: 'center',
              cursor: 'pointer',
            }}
            onClick={addBlock}>
            <TiPlus />
            <Text>새로운 항목 추가</Text>
          </RoundDashedSection>
        </Row>
        {submitButtonOptions?.visible && (
          <Row>
            <Button onClick={() => onSubmit && onSubmit(extractSurveyResult())}>
              {submitButtonOptions?.text || '전송'}
            </Button>
          </Row>
        )}
      </SurveyContainer>
    </ThemeProvider>
  );
};

export default Editor;
