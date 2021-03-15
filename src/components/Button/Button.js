import { ButtonStyled } from './Button.styled';

export default function Button({ children, ...props }) {
  return (
    <ButtonStyled type="button" {...props}>
      {children}
    </ButtonStyled>
  );
}
