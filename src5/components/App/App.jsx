import { Component } from 'react';
import Box from 'components/Box';
import Modal from 'components/Modal';
import Loader from 'components/Loader';
import Searchbar from 'components/Searchbar';
import Button from 'components/Button';
import ImageGallery from 'components/ImageGallery';

// const Text = styled.p`
//   color: ${p => p.theme.colors.accent};
//   font-family: ${p => p.theme.fonts.body};
//   font-size: ${p => p.theme.fontSizes.l};
//   padding-top: ${p => p.theme.space[4]}px;
//   padding-bottom: ${p => p.theme.space[3]}px;
// `;

const axios = require('axios');

class App extends Component {
  state = {
    showModal: false,
    showLoader: false,
    searchQuery: 'dogs',
    currentPage: 1,
    totalPage: 1,
    BASE_URL: 'https://pixabay.com/api',
    API_KEY: '27704892-de5059e1c4b826ebc44d6e413',
    pageItem: 20,
    totalHits: 0,
    images: [],
    modalImage: '',
    modalTags: '',
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.fetchImages();
    }
  }

  handlePageNext = () => {
    console.log(this.state.currentPage);
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  handleSubmit = ({ searchQueryForm }, { resetForm }) => {
    if (searchQueryForm !== '' && searchQueryForm !== this.state.searchQuery) {
      console.log(this.state.searchQuer);
      this.setState({ searchQuery: searchQueryForm, currentPage: 1 });
    }
    // resetForm();
  };
  toggleModal = (image, tags) => {
    if (!this.state.showModal) {
      this.enebleLoader();
    }
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImage: image,
      modalTags: tags,
    }));
  };


  async fetchImages() {
    this.setState({ showLoader: true });
    const { searchQuery, currentPage, BASE_URL, API_KEY, pageItem } =
      this.state;
    const url = `${BASE_URL}/?key=${API_KEY}&q=${searchQuery}&image_type=photo&per_page=${pageItem}&page=${currentPage}`;
    console.log(url);
    try {
      const resp = await axios.get(url);

      if (currentPage === 1) {
        this.setState({ totalHits: resp.data.totalHits });
        this.setState({
          totalPage: Math.ceil(resp.data.totalHits / this.state.pageItem),
        });
      }

      if (resp.data.totalHits !== 0) {
        this.setState(prevState => ({
          images:
            this.state.currentPage > 1
              ? [...prevState.images, ...resp.data.hits]
              : resp.data.hits,
        }));
      } else {
        this.setState({ images: [] });
      }


    } catch (err) {

      console.error('axiosget error');
    } finally {
      this.setState({ showLoader: false });
    }
  }

  render() {
    const {
      showModal,
      showLoader,
      images,
      modalImage,
      modalTags,
      currentPage,
      totalPage,
    } = this.state;
    console.log(currentPage, totalPage);
    return (
      <Box position="relative" as="main">
        <Searchbar onSubmit={this.handleSubmit} />


        {images.length > 0 && (
          <ImageGallery
            images={this.state.images}
            toggleModal={this.toggleModal}
          ></ImageGallery>
        )}
        {currentPage < totalPage && (
          <Box textAlign="center">
            <Button onClick={this.handlePageNext}>Load more</Button>
          </Box>
        )}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            {' '}
            <img src={modalImage} alt={modalTags} />
          </Modal>
        )}
        {showLoader && <Loader disabledLoader={this.disabledLoader} />}

      </Box>
    );
  }
}

export default App;
