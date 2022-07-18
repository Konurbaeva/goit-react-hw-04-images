import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeDots } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyled>
      <ThreeDots color="#00BFFF" height={80} width={80} radius="9" />
    </LoaderStyled>
  );
};
