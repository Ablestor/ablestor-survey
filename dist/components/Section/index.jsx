import { StyledRoundSection, StyledDashedSection, StyledSurveyContainer, StyledRow, StyledVerticalDivider, StyledFlexContainer, StyledFlexElement, } from './styled';
export const RoundSection = (props) => <StyledRoundSection {...props}/>;
export const RoundDashedSection = (props) => <StyledDashedSection {...props}/>;
export const SurveyContainer = (props) => <StyledSurveyContainer {...props}/>;
export const Row = (props) => <StyledRow {...props}/>;
export const VerticalDivider = (props) => <StyledVerticalDivider {...props}/>;
export const FlexContainer = (props) => <StyledFlexContainer {...props}/>;
export const FlexElement = (props) => (<StyledFlexElement className={'flex-element'} {...props}/>);
