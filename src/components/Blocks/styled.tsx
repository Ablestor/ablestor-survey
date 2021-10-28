import styled, { keyframes } from 'styled-components';
import Colors from '../../constants/colors';

const createAnimation = keyframes`
  from {
    background-color: ${Colors.main}
  }
  to {
    background-color: #fff;
  }
`;

export const BlockContainer = styled.div`
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid ${Colors.lightGray};
  border-radius: 5px;
  background-color: #fff;
  animation: ${createAnimation} 1s;
`;

export const BlockButtonSection = styled.div`
  text-align: right;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid ${Colors.lightGray};
`;
