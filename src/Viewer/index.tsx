import { useState, useEffect } from 'react';
import update from 'immutability-helper';
import { Row, SurveyContainer } from '../components/Section';
import { ISurveyViewer } from '../@types/viewer';

import { Title, Description } from '../components/Texts';
import { ISurveyResult } from '../@types/editor';
import { BlockPresenter } from './Blocks';
import { Blocks } from '../@types/block';
import { Button } from '../components/Buttons';

import 'filepond/dist/filepond.min.css';

const Viewer = ({ survey, onUpdate }: ISurveyViewer) => {
  const [surveyContent, setSurveyContent] = useState<ISurveyResult>(survey);

  useEffect(() => {
    setSurveyContent(survey);
    onUpdate(survey);
  }, [onUpdate, survey]);

  const onUpdateBlock = (index: number, data: Blocks) => {
    console.log(index, data);

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
      <Row>
        <Button
          onClick={() => {
            console.log(surveyContent);
          }}>
          확인
        </Button>
      </Row>
    </SurveyContainer>
  );
};

export default Viewer;
