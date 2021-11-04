/// <reference types="react" />
import { ISurveyViewer } from '../@types/viewer';
import 'filepond/dist/filepond.min.css';
declare const Viewer: ({ survey, onSubmit }: ISurveyViewer) => JSX.Element;
export default Viewer;
