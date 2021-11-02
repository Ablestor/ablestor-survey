import styled from 'styled-components';
import Colors from '../../constants/colors';
import { FlexConatinerProps, FlexElementProps } from './type';

export const StyledRoundSection = styled.div`
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
`;

export const StyledSurveyContainer = styled(StyledRoundSection)`
  /* 빌드시에는 내용 지울 것 */
  width: 600px;
  height
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
  background-color: ${Colors.lightGray};
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
