import React, { ReactElement, useState, useEffect } from 'react';
import update from 'immutability-helper';
import { Row, SurveyContainer } from '../components/Section';
import { ISurveyViewer } from '../@types/viewer';

import { Title, Description } from '../components/Texts';
import { ISurveyResult } from '../@types/editor';
import { BlockPresenter } from './Blocks';
import { Blocks, BlockTypes } from '../@types/block';
import { Button } from '../components/Buttons';

import 'filepond/dist/filepond.min.css';

const Viewer = <T extends ISurveyViewer>({
  survey,
  submitButtonOptions,
  onSubmit,
}: T): ReactElement<T> => {
  const [surveyContent, setSurveyContent] = useState<ISurveyResult>(survey);

  useEffect(() => {
    setSurveyContent(survey);
  }, [survey]);

  const onUpdateBlock = (index: number, data: Blocks) => {
    setSurveyContent(
      update(surveyContent, {
        content: {
          [index]: {
            $set: data,
          },
        },
      }),
    );
  };

  const { title, description, content } = surveyContent;

  return (
    <SurveyContainer>
      <Row>
        <Title>{title}</Title>
      </Row>
      <Row>
        <Description>{description}</Description>
      </Row>
      {content.map((block, i) => (
        <Row key={i}>
          <BlockPresenter block={block} onUpdateBlock={data => onUpdateBlock(i, data)} />
        </Row>
      ))}
      {submitButtonOptions?.visible && (
        <Row>
          <Button
            onClick={() => {
              const invalidContents = content.filter(block => {
                if (block.type === BlockTypes.BLANK) {
                  return false;
                }

                return (
                  block.required &&
                  'answer' in block &&
                  (block.answer === null ||
                    block.answer === undefined ||
                    block.answer === '' ||
                    (block.answer instanceof Array && block.answer.length === 0))
                );
              });

              if (invalidContents.length) {
                console.log('???????????? ?????? ????????? ????????????.');
                console.log(invalidContents);
                return;
              }

              onSubmit && onSubmit(surveyContent);
            }}>
            {submitButtonOptions?.text || '??????'}
          </Button>
        </Row>
      )}
    </SurveyContainer>
  );
};

export default Viewer;
