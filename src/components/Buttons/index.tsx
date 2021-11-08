import React, { ReactElement, ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';
import { StyledButton, StyledIconButton } from './styled';
import { IconButtonProps } from './type';

export const Button = <T extends ButtonHTMLAttributes<HTMLButtonElement>>(
  props: T,
): ReactElement<T> => <StyledButton {...props} />;

export const IconButton = <T extends IconButtonProps>({
  icon,
  text,
  active,
  onClick,
}: T): ReactElement<T> => {
  return (
    <StyledIconButton
      className={classnames({
        active,
      })}
      onClick={onClick}>
      {icon}
      {text && <span>{text}</span>}
    </StyledIconButton>
  );
};
