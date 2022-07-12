import { Component } from 'react';
import { Searchbar } from './components/Searchbar';
import { ImageGallery } from './components/ImageGallery';
import { Button } from './components/Button';
// import * as API from '../services/api';

import { fetchImagesWithQuery } from './services/api';

export class App extends Component {
  state = {
    searchQuery: '',
    hits: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      fetchImagesWithQuery()
        .then(response => {
          if (response) {
            console.log('response: ', response);
            return response;
          }
        })
        .then(searchQuery => this.setState({ searchQuery: searchQuery }));
    }
  }

  handleFormSubmit = queryFromSearchbar => {
    this.setState({ searchQuery: queryFromSearchbar, hits: [], page: 1 });
  };

  render() {
    return (
      <>
        <h1>Test</h1>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery />
        {this.state.hits.length > 0 && <Button />}
      </>
    );
  }
}
