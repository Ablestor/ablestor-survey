import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  height: 36px;
  padding: 0 5px;
  border: none;
  border-radius: 5px;
  font-size: 0.9em;
  outline: none;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: ${props => props.theme.main};
  }
  &.active {
    color: #fff;
    background-color: ${props => props.theme.main};
  }
`;

export const StyledIconButton = styled(StyledButton)`
  width: auto;
  line-height: 36px;
  margin: 0 2px;
  padding: 0 10px;
  font-size: 18px;
  justify-content: middle;
  &:hover {
    transform: scale(1.05);
  }
  svg {
    position: relative;
    top: 3px;
  }
  span {
    margin-left: 3px;
    font-size: 0.9rem;
  }
`;
