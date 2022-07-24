import styled from 'styled-components';
import { Form, Field } from 'formik';
import { ToastContainer } from 'react-toastify';
import { ImSearch } from 'react-icons/im';

export const SearchSvg = styled(ImSearch)`
  width: 20px;
  height: 20px;
`;

export const ToastContainerStyled = styled(ToastContainer)`
  /* display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: start;
  background-color: #3e68ff;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
  padding: 0.25em 0.75em;
  min-width: 10ch;
  min-height: 44px;
  text-align: center;
  line-height: 1.1;
  border: none;
  margin-bottom: 1rem;
  cursor: pointer; */
  position: relative;
  min-height: 64px;
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 10%), 0 2px 15px 0 rgb(0 0 0 / 5%);
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  max-height: 800px;
  overflow: hidden;
  font-family: sans-serif;
  cursor: pointer;
  direction: ltr;
`;

export const SearchbarStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  /* border-radius: 3px; */
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;
