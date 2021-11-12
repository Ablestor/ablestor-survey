import React, { ReactElement } from 'react';
import { ISurveyEditor } from '../@types/editor';
declare const Editor: <T extends ISurveyEditor>({ submitButtonOptions, defaultValue, onChange, onSubmit, }: T) => React.ReactElement<T, string | React.JSXElementConstructor<any>>;
export default Editor;
