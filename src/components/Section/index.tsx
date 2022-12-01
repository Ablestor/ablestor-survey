import React, { ReactElement } from 'react';
import { BaseSectionProps, FlexConatinerProps, FlexElementProps, ThemeProps } from './type';
import {
  StyledRoundSection,
  StyledDashedSection,
  StyledSurveyContainer,
  StyledRow,
  StyledVerticalDivider,
  StyledFlexContainer,
  StyledFlexElement,
} from './styled';

export const RoundSection = <T extends BaseSectionProps>(props: T): ReactElement<T> => (
  <StyledRoundSection {...props} />
);

export const RoundDashedSection = <T extends BaseSectionProps>(props: T): ReactElement<T> => (
  <StyledDashedSection {...props} />
);

export const SurveyContainer = <T extends BaseSectionProps>(props: T): ReactElement<T> => (
  <StyledSurveyContainer {...props} />
);

export const Row = <T extends BaseSectionProps>(props: T): ReactElement<T> => (
  <StyledRow {...props} />
);

export const VerticalDivider = <T extends BaseSectionProps>(props: T): ReactElement<T> => (
  <StyledVerticalDivider {...props} />
);

export const FlexContainer = <T extends FlexConatinerProps>(props: T): ReactElement<T> => (
  <StyledFlexContainer {...props} />
);

export const FlexElement = <T extends FlexElementProps>(props: T): ReactElement<T> => (
  <StyledFlexElement className={'flex-element'} {...props} />
);
