import styled from 'styled-components';
import { HiArchive, HiArrowCircleUp, HiBriefcase } from 'react-icons/hi';

import  {Box}  from 'components/box';


import { Component } from 'react';
import { Audio } from 'react-loader-spinner';
import { AiOutlineSearch } from 'react-icons/ai';
import { FcSearch } from 'react-icons/fc';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';
import Modal from '../Modal'

const Text = styled.p`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
`;

class App extends Component {

  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {

    return (
      <Box position="relative" as="main">

      </Box>
    );
  }
}

export default App;
