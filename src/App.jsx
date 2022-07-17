import { Component } from 'react';
import { Button } from 'components/Button';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { Searchbar } from './components/Searchbar';
// import { Button } from './components/Button';

import { fetchImagesWithQuery } from './services/api';
// import { Modal } from 'components/Modal';
import Modal from 'components/Modal/Modal';

export class App extends Component {
  state = {
    hits: [],
    searchQuery: '',
    pictures: [],
    totalHits: '',
    page: 1,
    errorMsg: '',
    isLoading: false,
    showModal: false,
    modalImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    const prevsearchQuery = prevState.searchQuery;
    const searchQuery = this.state.searchQuery;

    if (prevPage !== nextPage || prevsearchQuery !== searchQuery) {
      this.loadResults();
    }
  }

  loadResults = () => {
    const { per_page, page } = this.state;

    this.setState({ isLoading: true });

    fetchImagesWithQuery(this.state.searchQuery, per_page, page)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          errorMsg: '',
        }));
      })
      .catch(error =>
        this.setState({
          errorMsg: 'Error while loading data. Try again later.',
        })
      )
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleFormSubmit = queryFromSearchbar => {
    this.setState({ searchQuery: queryFromSearchbar, hits: [], page: 1 });
  };

  toggleModal = () => {
    console.log('toggle modal was clicked');
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { hits, showModal } = this.state;
    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* {showModal && <Modal />} */}
        {showModal && <Modal>here modal content</Modal>}
        {hits.length > 0 && (
          <ImageGallery images={hits} openModal={this.toggleModal} />
        )}
        <Button onClick={this.loadMore} />
      </>
    );
  }
}
