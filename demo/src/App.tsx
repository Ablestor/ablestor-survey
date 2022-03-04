import { useState } from 'react';
import { Editor, Viewer } from '@ablestor/ablestor-survey';
import { ISurveyResult } from '@ablestor/ablestor-survey/dist/@types/editor';

const App = () => {
  const [surveyContent, setSurveyContent] = useState<ISurveyResult>();

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
