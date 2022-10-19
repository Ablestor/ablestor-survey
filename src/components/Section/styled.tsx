import styled from 'styled-components';
import { FlexConatinerProps, FlexElementProps } from './type';

export const StyledRoundSection = styled.div`
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
`;

export const StyledDashedSection = styled.div`
  padding: 20px;
  border-radius: 5px;
  border: 1px dashed ${props => props.theme.lightGray};
`;

export const StyledSurveyContainer = styled.div`
  display: block;
  width: 100%;
  height: auto;
`;

export const StyledRow = styled.div`
  margin-top: 20px;
`;

export const StyledVerticalDivider = styled.div`
  display: inline-block;
  position: relative;
  top: -2px;
  width: 1px;
  height: 36px;
  margin: 0 12px;
  line-height: 100%;
  vertical-align: middle;
  background-color: ${props => props.theme.lightGray};
`;

export const StyledFlexContainer = styled.div<FlexConatinerProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
  > .flex-element {
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
`;

export const StyledFlexElement = styled.div<FlexElementProps>`
  ${props => (props.width === 'flex' ? `flex: 1` : `width: ${props.width}px`)};
`;
