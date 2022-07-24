import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import {
  SearchSvg,
  SearchbarStyled,
  SearchForm,
  SearchFormInput,
  SearchFormButtonLabel,
  SearchFormButton,
  ToastContainerStyled,
} from './Searchbar.styled';

const initialValues = { searchQuery: '' };
const schema = yup.object().shape({
  searchQuery: yup.string().required(),
});

const Searchbar = props => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('The input field is empty!', {
        autoClose: true,
        position: 'top-right',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        border: '1px solid #EB5757',
        borderRadius: '50px !important',
        background: 'pink !important',
        theme: 'dark',
      });

      return;
    }

    props.onSubmit(searchQuery);
    setSearchQuery('');
  };

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <>
          <SearchbarStyled>
            <SearchForm className="form" onSubmit={handleSubmit}>
              <SearchFormInput
                className="input"
                name="searchQuery"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                value={searchQuery}
                onChange={handleChange}
              />
              <ErrorMessage name="searchQuery" />
              <SearchFormButton type="submit" className="button">
                <SearchFormButtonLabel className="button-label">
                  Search
                </SearchFormButtonLabel>
                <SearchSvg />
              </SearchFormButton>
            </SearchForm>
          </SearchbarStyled>
          <ToastContainerStyled />
        </>
      </Formik>
    </>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
