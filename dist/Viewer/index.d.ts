import { ReactElement } from 'react';
import { ISurveyViewer } from '../@types/viewer';
import 'filepond/dist/filepond.min.css';
declare const Viewer: <T extends ISurveyViewer>({ survey, submitButtonOptions, onSubmit, }: T) => ReactElement<T, string | import("react").JSXElementConstructor<any>>;
export default Viewer;
