import { Component } from 'react';
import { ImageGallery } from './components/ImageGallery';
import { Searchbar } from './components/Searchbar';

import { fetchImagesWithQuery } from './services/api';

export class App extends Component {
  state = {
    hits: [],
    searchQuery: '',
    isLoading: false,
    pictures: [],
    totalHits: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevPage !== nextPage) {
      // this.loadResults();
      this.setState({ isLoading: true });
      fetchImagesWithQuery(this.state.searchQuery).then(response => {
        console.log('RESPONSE', response);
        this.setState({ hits: response.hits });
      });
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   this.setState({ isLoading: true });
  //   if (prevState.searchQuery !== this.state.searchQuery) {
  //     try {
  //       const hits = fetchImagesWithQuery(this.state.searchQuery).then(hits =>
  //         this.setState(prevState => ({
  //           pictures: [...prevState.pictures, ...hits],
  //           totalHits: hits.data.totalHits,
  //         }))
  //       );

  //       this.setState({ hits: hits });
  //     } catch (error) {
  //       this.setState({ error });
  //     } finally {
  //       this.setState({ isLoading: false });
  //     }
  //   }
  // }

  handleFormSubmit = queryFromSearchbar => {
    this.setState({ searchQuery: queryFromSearchbar, hits: [], page: 1 });
  };

  render() {
    return (
      <>
        <h1>Test</h1>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.hits} />
      </>
    );
  }
}
