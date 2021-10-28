import { StyledIconButton } from './styled';
import { IconButtonProps } from './type';

export const IconButton = ({ icon, text, onClick }: IconButtonProps) => {
  return (
    <StyledIconButton onClick={onClick}>
      {icon}
      {text && <span>{text}</span>}
    </StyledIconButton>
  );
};
