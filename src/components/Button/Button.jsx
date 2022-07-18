import { ButtonStyled } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonStyled type="submit" onClick={onClick}>
      Load more
    </ButtonStyled>
  );
};
