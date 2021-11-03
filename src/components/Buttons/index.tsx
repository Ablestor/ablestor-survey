import { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';
import { StyledButton, StyledIconButton } from './styled';
import { IconButtonProps } from './type';

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledButton {...props} />;
};

export const IconButton = ({ icon, text, active, onClick }: IconButtonProps) => {
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
