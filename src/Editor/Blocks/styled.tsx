import styled, { keyframes } from 'styled-components';
import { defaultTheme } from '../../helpers/theme';

const createAnimation = keyframes`
  from {
    background-color: ${defaultTheme.lightGray}
  }
  to {
    background-color: #fff;
  }
`;

export const BlockContainer = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 5px;
  background-color: #fff;
  animation: ${createAnimation} 1s;
`;

export const BlockButtonSection = styled.div`
  text-align: right;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.lightGray};
  display: flex;
  justify-content: flex-end;
`;
