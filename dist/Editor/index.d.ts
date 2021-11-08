import React, { ReactElement } from 'react';
import { ISurveyEditor } from '../@types/editor';
declare const Editor: <T extends ISurveyEditor>({ onSubmit }: T) => React.ReactElement<T, string | React.JSXElementConstructor<any>>;
export default Editor;
