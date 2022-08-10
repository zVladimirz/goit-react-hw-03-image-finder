import { StyledButton} from './Button.styled';

const Button = ({
  type = 'button',
  disabled = false,
  children,
  onClick,
}) => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;