import React, { ReactElement } from 'react';
import { AOrBISurveyEditor } from '../@types/editor';
declare const Editor: <T extends AOrBISurveyEditor>({ submitButtonOptions, defaultValue, onChange, onSubmit, inputShow, whiteList, blackList, }: T) => React.ReactElement<T, string | React.JSXElementConstructor<any>>;
export default Editor;
