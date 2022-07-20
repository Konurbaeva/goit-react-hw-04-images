import { Component } from 'react';
import { Button } from 'components/Button';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { Searchbar } from './components/Searchbar';

import { fetchImagesWithQuery } from './services/api';
import Modal from 'components/Modal/Modal';

import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    hits: [],
    searchQuery: '',
    pictures: [],
    totalHits: '',
    page: 1,
    errorMsg: '',
    isLoading: false,
    activeImg: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    const prevsearchQuery = prevState.searchQuery;
    const searchQuery = this.state.searchQuery;

    if (searchQuery === '') {
      return;
    }

    if (prevPage !== nextPage || prevsearchQuery !== searchQuery) {
      this.loadResults();
    }
  }

  loadResults = () => {
    const { searchQuery, per_page, page } = this.state;
    this.setState({ isLoading: true });

    try {
      fetchImagesWithQuery(searchQuery, per_page, page)
        .then(hits => {
          this.setState(prevState => ({
            hits: page > 1 ? [...prevState.hits, ...hits] : hits,
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
    } catch (e) {
      console.log(e);
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery, page: 1 });
  };

  setActiveImg = activeImg => {
    this.setState({
      activeImg,
    });
  };

  render() {
    const { hits, activeImg, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {isLoading && <Loader />}
        {hits.length > 0 && (
          <ImageGallery images={hits} openModal={this.setActiveImg} />
        )}

        {hits.length > 0 && <Button onClick={this.loadMore} />}
        {activeImg && (
          <Modal
            largeImageURL={activeImg}
            onClose={() => this.setActiveImg(null)}
          >
            <img src={activeImg} alt="" />
          </Modal>
        )}
      </>
    );
  }
}
