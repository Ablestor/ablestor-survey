# Mommoss Survey Component

맘모스 서비스에 사용되는 React 설문 모듈입니다.

설문 내용을 생성하는 `Editor`와 생성된 내용을 기반으로 동작하여 내용을 채워주는 `Viewer`가 포함되어 있습니다.


## Installation

```shell
npm install @ablestor/ablestor-survey

# or

yarn add @ablestor/ablestor-survey

```

## How to use?
```javascript
import { useState } from 'react';

import { Editor, Viewer, EditorType } from '@ablestor/ablestor-survey';

const View = () => {
  const [survey, setSurvey] = useState<EditorType.ISurveyResult>();

  return (
    <>
      <Editor onSubmit={survey => setSurvey(survey)} />
      {survey && (
        <Viewer
          survey={survey}
          onSubmit={result => {
            console.log(result);
          }}
        />
      )}
    </>
  );
};

export default Home;
```

## Feature

### Editor

|property|required|value|
|------|---|---|
|onSubmit|Y|(result: EditorType.ISurveyResult) => void|

### Viewer

|property|required|value|
|------|---|---|
|survey|Y|EditorType.ISurveyResult|
|onSubmit|Y|(result: EditorType.ISurveyResult) => void|
