import { useState, useEffect } from 'react';
import { Button } from 'components/Button';
import ImageGallery from './components/ImageGallery/ImageGallery';

import Searchbar from './components/Searchbar/Searchbar';

import { fetchImagesWithQuery } from './services/api';
import Modal from 'components/Modal/Modal';

import { Loader } from 'components/Loader/Loader';
// import { toast } from 'react-toastify';

export const App = () => {
  // const [page, setPage] = useState(1);
  // const [perPage, setPerPage] = useState(7);
  // const [errorMsg, setErrorMsg] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [hits, setHits] = useState([]);
  const [currentPage, setCurrentPage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [activeImg, setActiveImg] = useState(null);
  // const [totalHits, setTotalHits] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const fetchResults = () => {
      setIsLoading(true);

      fetchImagesWithQuery({
        searchQuery: searchQuery,
        currentPage: currentPage,
      })
        .then(response => {
          setHits(prevResults => [...prevResults, ...response]);
        })
        .catch(error => console.error(error))
        .finally(() => setIsLoading(false));
    };

    fetchResults();
  }, [currentPage, searchQuery]);

  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setCurrentPage(1);
    setHits([]);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {isLoading && <Loader />}
      {hits.length > 0 && (
        <ImageGallery images={hits} openModal={() => setActiveImg(activeImg)} />
      )}
      {hits.length > 0 && <Button onClick={loadMore} />}
      {activeImg && (
        <Modal largeImageURL={activeImg} onClose={() => setActiveImg(null)}>
          <img src={activeImg} alt="" />
        </Modal>
      )}
    </>
  );
};
