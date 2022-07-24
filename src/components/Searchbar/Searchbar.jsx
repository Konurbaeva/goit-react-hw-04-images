import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { Component } from 'react';
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

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      toast.error('The input field is empty!', {
        autoClose: 2000,
        // autoClose: true,
        position: 'top-right',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        // draggable: true,
        progress: undefined,
        border: '1px solid #EB5757',
        borderRadius: '50px !important',
        background: 'pink !important',
      });

      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  handleChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={this.handleSubmit}
        >
          <>
            <SearchbarStyled>
              <SearchForm className="form" onSubmit={this.handleSubmit}>
                <SearchFormInput
                  className="input"
                  name="searchQuery"
                  type="text"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                  value={searchQuery}
                  onChange={this.handleChange}
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
            <ToastContainerStyled
              // position="top-right"
              autoClose={5000}
              style={{
                width: '5%',
                height: '5%',
                padding: '0px 16px',
                margin: '0px',
                position: 'top-right',
                color: 'red',
              }}
            />
          </>
        </Formik>
      </>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
