import classnames from 'classnames';
import { StyledButton, StyledIconButton } from './styled';
export const Button = (props) => {
    return <StyledButton {...props}/>;
};
export const IconButton = ({ icon, text, active, onClick }) => {
    return (<StyledIconButton className={classnames({
            active,
        })} onClick={onClick}>
      {icon}
      {text && <span>{text}</span>}
    </StyledIconButton>);
};
