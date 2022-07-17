// import { Component } from 'react';

// export class Searchbar extends Component {
//   state = {
//     searchQuery: '',
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state.searchQuery);
//     this.setState({ searchQuery: '' });
//   };

//   handleChange(e) {
//     this.setState({ searchQuery: e.currentTarget.value });
//   }

//   render() {
//     return (
//       <>
//         <header className="searchbar">
//           <form className="form" onSubmit={this.handleSubmit}>
//             <input
//               className="input"
//               type="text"
//               autoComplete="off"
//               autoFocus
//               placeholder="Search images and photos"
//               value={this.state.searchQuery}
//               onChange={e => this.handleChange(e)}
//             />
//             <button type="submit" className="button">
//               <span className="button-label">Search</span>
//             </button>
//           </form>
//         </header>
//       </>
//     );
//   }
// }

import { Component } from 'react';
import styled from 'styled-components';

const SearchbarStyled = styled.header`
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

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
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

const SearchFormButtonLabel = styled.span`
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

const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;

// ToDo implement in styled-components
// .SearchForm-input::placeholder {
//   font: inherit;
//   font-size: 18px;
// }

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  handleChange(e) {
    this.setState({ searchQuery: e.currentTarget.value });
  }

  render() {
    return (
      <>
        <SearchbarStyled className="searchbar">
          <SearchForm className="form" onSubmit={this.handleSubmit}>
            <SearchFormInput
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.searchQuery}
              onChange={e => this.handleChange(e)}
            />
            <SearchFormButton type="submit" className="button">
              <SearchFormButtonLabel className="button-label">
                Search
              </SearchFormButtonLabel>
            </SearchFormButton>
          </SearchForm>
        </SearchbarStyled>
      </>
    );
  }
}
