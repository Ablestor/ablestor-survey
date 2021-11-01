import { ButtonHTMLAttributes } from 'react';
import { StyledButton, StyledIconButton } from './styled';
import { IconButtonProps } from './type';

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledButton {...props} />;
};

export const IconButton = ({ icon, text, active, onClick }: IconButtonProps) => {
  return (
    <StyledIconButton className={active ? 'active' : ''} onClick={onClick}>
      {icon}
      {text && <span>{text}</span>}
    </StyledIconButton>
  );
};
