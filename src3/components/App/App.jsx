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

class App extends Component {
  state = {
    showModal: false,
    showLoader: false,
    searchQuer: '',
    currentPage: 0,
    totalPage: 0,
  };

  handleIncrement = () => {
    console.log(this.state.currentPage);
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  handleSubmit = ({ searchQuerForm }, { resetForm }) => {
    if (searchQuerForm !== '' && searchQuerForm !== this.state.searchQuer) {
      console.log(this.state.searchQuer);
      this.setState({ searchQuer: searchQuerForm });
      this.setState({ currentPage: 0 });
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

  render() {
    const { showModal, showLoader } = this.state;
    return (
      <Box position="relative" as="main">
        <Searchbar onSubmit={this.handleSubmit} />
        <Box textAlign="center">
          <Button onClick={this.handleIncrement}>Load more</Button>
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
