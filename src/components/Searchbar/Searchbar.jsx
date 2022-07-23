import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import styled from 'styled-components';
// import {
//   SearchbarStyled,
//   SearchForm,
//   SearchFormInput,
//   SearchFormButton,
//   SearchFormButtonLabel,
// } from './Searchbar.styled';

const SearchSvg = styled(ImSearch)`
  width: 20px;
  height: 20px;
`;

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

    // if (this.state.searchQuery === '') {
    //   toast.error('The input field is empty!', {
    //     position: 'top-right',
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: 'dark',
    //   });

    //   return;
    // }

    if (this.state.searchQuery.trim() === '') {
      toast.error('The input field is empty!', {
        //autoClose: 2000,
        autoClose: true,
        position: 'top-right',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
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
          {props => (
            <>
              <Form className="form" onSubmit={this.handleSubmit}>
                <Field
                  className="input"
                  name="searchQuery"
                  type="text"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                  // value={props.values.searchQuery}
                  value={searchQuery}
                  onChange={this.handleChange}
                  // onChange={e => this.handleChange(e)}
                />
                <button type="submit" className="button">
                  <span className="button-label">Search</span>
                  <SearchSvg />
                </button>
                <ToastContainer
                  position="top-right"
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
              </Form>
            </>
          )}
        </Formik>
      </>
    );
  }
}
