import { Component } from 'react';
import { Searchbar } from './components/Searchbar';

import { fetchImagesWithQuery } from './services/api';

export class App extends Component {
  state = {
    hints: [],
    searchQuery: '',
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.searchQuery !== this.props.searchQuery) {
  //     fetchImagesWithQuery()
  //       .then(response => {
  //         if (response) {
  //           console.log('response: ', response);
  //           return response;
  //         }
  //       })
  //       .then(searchQuery => this.setState({ searchQuery: searchQuery }));
  //   }
  // }
  componentDidMount() {
    fetchImagesWithQuery('cat')
      .then(response => {
        if (response) {
          console.log('response: ', response);
          return response;
        }
      })
      .then(searchQuery => this.setState({ searchQuery: searchQuery }));
  }

  handleFormSubmit = queryFromSearchbar => {
    this.setState({ searchQuery: queryFromSearchbar, hits: [], page: 1 });
  };

  render() {
    return (
      <>
        <h1>Test</h1>
        <Searchbar onSubmit={this.handleFormSubmit} />
      </>
    );
  }
}
