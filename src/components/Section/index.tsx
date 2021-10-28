import styled from 'styled-components';
import Colors from '../../constants/colors';

export const SurveyContainer = styled.div`
  /* 빌드시에는 내용 지울 것 */
  width: 600px;

  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
`;

export const Row = styled.div`
  margin-top: 20px;
`;

export const VerticalDivider = styled.div`
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
