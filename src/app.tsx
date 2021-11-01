import { useState } from 'react';
import { ISurveyResult } from './@types/editor';
import './styles/common.css';

import Editor from './Editor';
import Viewer from './Viewer';

const App = () => {
  const [surveyContent, setSurveyContent] = useState<ISurveyResult>();

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, justifyContent: 'center' }}>
        <Editor onSubmit={setSurveyContent} />
      </div>
      <div style={{ flex: 1 }}>
        {surveyContent && <Viewer survey={surveyContent} onUpdate={setSurveyContent} />}
      </div>
    </div>
  );
};

export default App;
