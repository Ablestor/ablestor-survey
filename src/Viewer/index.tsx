import { useState, useEffect, useCallback } from 'react';
import update from 'immutability-helper';
import { Row, SurveyContainer } from '../components/Section';
import { ISurveyViewer } from '../@types/viewer';

import { Title, Description } from '../components/Texts';
import { ISurveyResult } from '../@types/editor';
import { BlockPresenter } from './Blocks';
import { Blocks, BlockTypes } from '../@types/block';
import { Button } from '../components/Buttons';

import 'filepond/dist/filepond.min.css';

const Viewer = ({ survey, onSubmit }: ISurveyViewer) => {
  const [surveyContent, setSurveyContent] = useState<ISurveyResult>(survey);

  useEffect(() => {
    setSurveyContent(survey);
  }, [survey]);

  const onUpdateBlock = useCallback(
    (index: number, data: Blocks) => {
      setSurveyContent(
        update(surveyContent, {
          content: {
            [index]: {
              $set: data,
            },
          },
        }),
      );
    },
    [surveyContent],
  );

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
              console.log('입력하지 않은 항목이 있습니다.');
              console.log(invalidContents);
              return;
            }

            onSubmit(surveyContent);
          }}>
          확인
        </Button>
      </Row>
    </SurveyContainer>
  );
};

export default Viewer;
