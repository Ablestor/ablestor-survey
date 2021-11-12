import React, { ReactElement } from 'react';
import { ISurveyViewer } from '../@types/viewer';
import 'filepond/dist/filepond.min.css';
declare const Viewer: <T extends ISurveyViewer>({ survey, submitButtonOptions, onSubmit, }: T) => React.ReactElement<T, string | React.JSXElementConstructor<any>>;
export default Viewer;
