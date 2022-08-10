import { Component } from 'react';
// import styled from 'styled-components';
// import { HiArchive, HiArrowCircleUp, HiBriefcase } from 'react-icons/hi';
// import  Button  from 'components/Button';
import Box from 'components/Box';
// import  AppBar  from 'components/AppBar';
//  import { Audio } from 'react-loader-spinner';
import { AiOutlineSearch } from 'react-icons/ai';
// import { FcSearch } from 'react-icons/fc';
// import { ReactComponent as AddIcon } from 'icons/add.svg';
import IconButton from 'components/IconButton';
// import { ReactComponent as AddIcon } from 'icons/add.svg';
import Modal from 'components/Modal';
import Loader from 'components/Loader';
import Searchbar from 'components/Searchbar';
import Button from 'components/Button';
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
    searchQuery: '',
    currentPage: 1,
    totalPage: 0,
    BASE_URL: 'https://pixabay.com/api',
    API_KEY: '27704892-de5059e1c4b826ebc44d6e413',
    pageItem: 20,
    totalHits: 0,
    images: [],
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
      this.setState({ searchQuery: searchQueryForm });
      this.setState({ currentPage: 1 });
    }
    // resetForm();
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  toggleLoader = () => {
    this.setState(({ showLoader }) => ({
      showLoader: !showLoader,
    }));
  };

  // https://pixabay.com/api/?key=27704892-de5059e1c4b826ebc44d6e413&q=yellow+flowers&image_type=photo&pretty=true
  // https://pixabay.com/api/docs/

  async fetchImages() {
    this.setState({ showLoader: true });
    const {
      searchQuery,
      currentPage,
      totalPage,
      BASE_URL,
      API_KEY,
      pageItem,
      totalHits,
    } = this.state;
    const url = `${BASE_URL}/?key=${API_KEY}&q=${searchQuery}&image_type=photo&per_page=${pageItem}&page=${currentPage}`;
    console.log(url);
    try {
      const resp = await axios.get(url);

      if (currentPage === 1) {
        this.setState({ totalHits: resp.data.totalHits });
        this.setState({ totalPage: Math.ceil(resp.data.totalHits / this.pageItem) });
      }
      // this.images = resp.data;
      // const resp1 = resp.data;
      // this.setState({ images: resp.data });
      if (resp.data.totalHits !== 0)
        this.setState(prevState => ({
          images:
            this.state.currentPage > 1 ? [...prevState.images, ...resp.hits] : resp.hits,
        }));

      // return resp.data;
    } catch (err) {
      // Handle Error Here
      console.error('axiosget error');
    } finally {
      this.setState({ showLoader: false });
    }
  }

  render() {
    const { showModal, showLoader } = this.state;
    return (
      <Box position="relative" as="main">
        <Searchbar onSubmit={this.handleSubmit} />
        <Box textAlign="center">
          <Button onClick={this.handlePageNext}>Load more</Button>
        </Box>

        <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
          <AiOutlineSearch width="40" height="40" fill="#fff" />
        </IconButton>
        <IconButton onClick={this.toggleLoader} aria-label="Добавить todo">
          <AiOutlineSearch width="30" height="30" fill="#fff" />
        </IconButton>

        {showLoader && <Loader onClose={this.toggleLoader} />}
        {showModal && <Modal onClose={this.toggleModal}>jhg bvc</Modal>}
      </Box>
    );
  }
}

export default App;
