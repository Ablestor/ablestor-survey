import styled from 'styled-components';
import Colors from '../../constants/colors';

export const StyledInput = styled.input`
  width: 100%;
  height: 36px;
  padding: 0 10px;
  margin: 5px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.9em;
  outline: none;
  transition: all 0.3s;
  &:focus,
  &:active {
    border-color: ${Colors.main};
  }
`;

export const StyledSelect = styled.select`
  display: inline-block;
  width: 100%;
  height: 36px;
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.9em;
  outline: none;
  transition: all 0.3s;
  &:focus,
  &:active {
    border-color: ${Colors.main};
  }
`;

export const StyledOptionEditor = styled.div`
  width: 100%;
`;
