import { useState } from 'react';
import { Editor, Viewer } from '@ablestor/ablestor-survey';
import { ISurveyResult } from '@ablestor/ablestor-survey/dist/@types/editor';

const App = () => {
  const [surveyContent, setSurveyContent] = useState<ISurveyResult>();

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
        <Editor
          submitButtonOptions={{ text: '설문 만들기', visible: true }}
          onSubmit={setSurveyContent}
        />
      </div>
      <div style={{ flex: 1, padding: 16 }}>
        {surveyContent && (
          <Viewer
            submitButtonOptions={{ text: '설문 제출 하기', visible: true }}
            survey={surveyContent}
            onSubmit={result => {
              console.log(result);
              alert(JSON.stringify(result));
            }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
