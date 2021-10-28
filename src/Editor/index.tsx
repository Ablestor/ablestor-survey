import { useCallback, useState } from 'react';
import { DropResult, DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { TiPlus } from 'react-icons/ti';
import update from 'immutability-helper';

import { Blocks, BlockTypes } from '../@types/block';
import { ISurveyEditor, ISurveyContent, ISurveyResult } from '../@types/editor';

import { Row, SurveyContainer } from '../components/Section';
import { BlockPresenter } from '../components/Blocks';
import { Input } from '../components/Inputs';
import { Button } from '../components/Buttons';
import { IconButton } from '../components/Buttons';

const Editor = ({ onFileUpload, onSubmit }: ISurveyEditor) => {
  const [surveyTitle, setSurveyTitle] = useState('');
  const [surveyDescription, setSurveyDescription] = useState('');
  const [surveyContent, setSurveyContent] = useState<ISurveyContent>([]);

  const extractSurveyResult = useCallback(
    (): ISurveyResult => ({
      title: surveyTitle,
      description: surveyDescription,
      content: surveyContent.filter(({ type }) => type !== BlockTypes.BLANK),
    }),
    [surveyTitle, surveyDescription, surveyContent],
  );

  const addBlock = useCallback(() => {
    const order = surveyContent.length + 1;

    setSurveyContent(
      update(surveyContent, {
        $push: [
          {
            type: BlockTypes.BLANK,
            order,
            required: false,
          },
        ],
      }),
    );
  }, [surveyContent]);

  const onUpdateBlock = (index: number, data: Blocks) => {
    setSurveyContent(
      update(surveyContent, {
        [index]: {
          $set: data,
        },
      }),
    );
  };

  const onCopyBlock = (index: number, data: Blocks) => {
    setSurveyContent(
      update(surveyContent, {
        $splice: [[index, 0, data]],
      }),
    );
  };

  const onRemoveBlock = (index: number) => {
    setSurveyContent(
      update(surveyContent, {
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
    const reorderSurveyContent = Array.from(surveyContent);
    const [removed] = reorderSurveyContent.splice(index, 1);
    reorderSurveyContent.splice(nextIndex, 0, removed);

    setSurveyContent(reorderSurveyContent);
  };

  return (
    <SurveyContainer>
      <IconButton icon={<TiPlus />} text={'항목 추가'} onClick={addBlock} />
      <Row>
        <Input placeholder={'설문 제목'} onChange={({ target }) => setSurveyTitle(target.value)} />
        <Input
          placeholder={'설문 설명'}
          onChange={({ target }) => setSurveyDescription(target.value)}
        />
      </Row>
      <Row>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='droppable'>
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {surveyContent.map((block, i) => (
                  <Draggable key={i} draggableId={String(i)} index={i}>
                    {provided => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <BlockPresenter
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
        <Button onClick={() => onSubmit && onSubmit(extractSurveyResult())}>전송</Button>
      </Row>
    </SurveyContainer>
  );
};

export default Editor;
