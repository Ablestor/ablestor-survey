import { BaseSectionProps, FlexConatinerProps, FlexElementProps } from './type';
import {
  StyledRoundSection,
  StyledSurveyContainer,
  StyledRow,
  StyledVerticalDivider,
  StyledFlexContainer,
  StyledFlexElement,
} from './styled';

export const RoundSection = (props: BaseSectionProps) => <StyledRoundSection {...props} />;

export const SurveyContainer = (props: BaseSectionProps) => <StyledSurveyContainer {...props} />;

export const Row = (props: BaseSectionProps) => <StyledRow {...props} />;

export const VerticalDivider = (props: BaseSectionProps) => <StyledVerticalDivider {...props} />;

export const FlexContainer = (props: FlexConatinerProps) => <StyledFlexContainer {...props} />;

export const FlexElement = (props: FlexElementProps) => (
  <StyledFlexElement className={'flex-element'} {...props} />
);
