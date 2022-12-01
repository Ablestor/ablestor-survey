import { useState } from 'react';
import { ISurveyResult } from './@types/editor';

import Editor from './Editor';
import Viewer from './Viewer';
import './styles/common.css';
import React from 'react';

const App = () => {
  const [surveyContent, setSurveyContent] = useState<ISurveyResult>();

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, justifyContent: 'center' }}>
        <Editor
          submitButtonOptions={{ text: '테스트 버튼', visible: true }}
          onSubmit={result => {
            console.log(result);
            setSurveyContent(result);
          }}
          onChange={setSurveyContent}
        />
      </div>
      <div style={{ flex: 1 }}>
        {surveyContent && (
          <Viewer
            submitButtonOptions={{ text: '테스트 버튼', visible: true }}
            survey={surveyContent}
            // onSubmit={result => {
            //   console.log(result);
            // }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
