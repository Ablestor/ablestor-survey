import { ReactElement, useState, useEffect } from 'react';
import { Row, SurveyContainer } from '../components/Section';
import { ISurveyViewer } from '../@types/viewer';

import { Title, Description } from '../components/Texts';
import { ISurveyResult } from '../@types/editor';
import { BlockPresenter } from './Blocks';

import { Button } from '../components/Buttons';

import 'filepond/dist/filepond.min.css';
import { ThemeProvider } from 'styled-components';
import { themeRef } from '..';

const Viewer = <T extends ISurveyViewer>({ survey, submitButtonOptions }: T): ReactElement<T> => {
  const [surveyContent, setSurveyContent] = useState<ISurveyResult>(survey);
  useEffect(() => {
    setSurveyContent(survey);
  }, [survey]);

  const { title, description, questions } = surveyContent;

  return (
    <ThemeProvider theme={{ ...themeRef.current }}>
      <SurveyContainer>
        <Row>
          <Title>{title}</Title>
        </Row>
        <Row>
          <Description>{description}</Description>
        </Row>
        {questions.map((block, i) => (
          <Row key={i}>
            <BlockPresenter block={block} />
          </Row>
        ))}
        {submitButtonOptions?.visible && (
          <Row>
            <Button>{submitButtonOptions?.text || '확인'}</Button>
          </Row>
        )}
      </SurveyContainer>
    </ThemeProvider>
  );
};

export default Viewer;
