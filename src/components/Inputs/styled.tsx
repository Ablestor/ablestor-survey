import styled from 'styled-components';
import Colors from '../../constants/colors';
import { CheckBoxProps, SwitchProps } from './type';

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

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid ${Colors.gray};
  border-radius: 5px;
  font-size: 0.9em;
  outline: none;
  font-family: inherit;
  transition: border 0.3s;
  resize: vertical;
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

export const StyledCheckBox = styled.div<CheckBoxProps>`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  margin: 5px 0;
  border-radius: ${props => (props.shape === 'circle' ? '50%' : '5px')};
  border: 1px solid ${Colors.gray};
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.lightGray};
  }
  &.active::after {
    position: absolute;
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    top: 4px;
    left: 4px;
    border-radius: ${props => (props.shape === 'circle' ? '50%' : '3px')};
    background-color: ${Colors.main};
  }
`;

export const StyledSwitch = styled.div<SwitchProps>`
  position: relative;
  display: inline-block;
  width: ${props => props.width}px;
  height: 20px;
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
    left: ${props => (props.value ? (props.width || 40) - 20 : 0)}px;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }
`;

export const StyledSelectorThumb = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${Colors.main};
  cursor: grab;
`;

export const StyledSelectorValueLabel = styled.div`
  position: absolute;
  width: 30px;
  top: 30px;
  left: -5px;
  text-align: center;
  font-weight: 0.8rem;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.6);
  > p {
    margin-bottom: 2px;
    color: #fff;
  }
  &:after {
    display: inline-block;
    position: absolute;
    content: '';
    top: -5px;
    left: 10px;
    width: 0;
    height: 0;
    border-bottom: 5px solid rgba(0, 0, 0, 0.6);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    background-color: transparent;
  }
`;
