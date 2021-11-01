import styled from 'styled-components';
import Colors from '../../constants/colors';
import { SwitchProps } from './type';

export const StyledInput = styled.input`
  width: 100%;
  height: 36px;
  padding: 0 10px;
  margin: 5px 0;
  border: 1px solid ${Colors.gray};
  border-radius: 5px;
  font-size: 0.9em;
  outline: none;
  transition: all 0.3s;
  &:focus,
  &:active {
    border-color: ${Colors.main};
  }
`;

export const StyledSelect = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 36px;
  padding: 0 10px;
  text-align: left;
  border: 1px solid ${Colors.gray};
  border-radius: 5px;
  font-size: 0.9em;
  outline: none;
  transition: all 0.3s;
  cursor: default;
  &:focus,
  &:active {
    border-color: ${Colors.main};
  }
  .select-current-value {
    height: 36px;
    vertical-align: middle;
    display: flex;
    align-items: center;
    > p {
      flex: 1;
      margin: 0;
    }
    .select-icon {
      width: 14px;
    }
  }
  .select-options-container {
    position: absolute;
    width: 100%;
    max-height: 300px;
    top: 0px;
    left: -0;
    background-color: #fff;
    border-radius: inherit;
    overflow: scroll;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);
    z-index: 9999;
    .select-options {
      padding: 0 10px;
      height: 36px;
      line-height: 36px;
      vertical-align: middle;
      &.selected {
        color: ${Colors.black};
        background-color: ${Colors.lightGray};
      }
      &:hover {
        color: #fff;
        background-color: ${Colors.main};
      }
    }
  }
`;

const switchPadding = 0;

export const StyledSwitch = styled.div<SwitchProps>`
  position: relative;
  display: inline-block;
  width: ${props => props.width}px;
  height: 20px;
  padding: ${switchPadding}px;
  background-color: ${props => (props.value ? Colors.main : Colors.lightGray)};
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  .switch-button {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    left: ${props => (props.value ? (props.width || 40) - 20 + switchPadding : switchPadding)}px;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }
`;
