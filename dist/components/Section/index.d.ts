import React, { ReactElement } from 'react';
import { BaseSectionProps, FlexConatinerProps, FlexElementProps } from './type';
export declare const RoundSection: <T extends BaseSectionProps>(props: T) => React.ReactElement<T, string | React.JSXElementConstructor<any>>;
export declare const RoundDashedSection: <T extends BaseSectionProps>(props: T) => React.ReactElement<T, string | React.JSXElementConstructor<any>>;
export declare const SurveyContainer: <T extends BaseSectionProps>(props: T) => React.ReactElement<T, string | React.JSXElementConstructor<any>>;
export declare const Row: <T extends BaseSectionProps>(props: T) => React.ReactElement<T, string | React.JSXElementConstructor<any>>;
export declare const VerticalDivider: <T extends BaseSectionProps>(props: T) => React.ReactElement<T, string | React.JSXElementConstructor<any>>;
export declare const FlexContainer: <T extends FlexConatinerProps>(props: T) => React.ReactElement<T, string | React.JSXElementConstructor<any>>;
export declare const FlexElement: <T extends FlexElementProps>(props: T) => React.ReactElement<T, string | React.JSXElementConstructor<any>>;
