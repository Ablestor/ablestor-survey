import { useState } from 'react';

import Editor from './Editor';
import Viewer from './Viewer';

import './styles/common.css';

const App = () => {
  const [surveyContent, setSurveyContent] = useState();

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, justifyContent: 'center' }}>
        <Editor onSubmit={setSurveyContent} />
      </div>
      <div style={{ flex: 1 }}>
        {surveyContent && (
          <Viewer
            survey={surveyContent}
            onSubmit={result => {
              console.log(result);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
