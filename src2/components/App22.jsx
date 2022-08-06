import styled from 'styled-components';
import { HiArchive, HiArrowCircleUp, HiBriefcase } from 'react-icons/hi';
import { Button } from './Button';
import { Box } from './Box';
import { AppBar } from './AppBar';

import { Component } from 'react';
import { Audio } from 'react-loader-spinner';
import { AiOutlineSearch } from 'react-icons/ai';
import { FcSearch } from 'react-icons/fc';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';

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
        <IconButton onClick={toggleModal} aria-label="Р”РѕР±Р°РІРёС‚СЊ todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        {showModal && (
          <Modal onClose={toggleModal}>
            {/* <TodoEditor onSubmit={this.addTodo} /> */}
          </Modal>
        )}

        <AppBar />
        <Box display="flex" justifyContent="flex-end" mt={4} as="section">
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
            officia!
          </Text>
        </Box>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
        <Box as="section" mt={6}>
          <Button icon={HiArchive}>Search</Button>
          <Button icon={HiArrowCircleUp}>Filter</Button>
          <Button icon={HiBriefcase} type="submit">
            LogIn
          </Button>
          <Button type="submit">LogIn</Button>
        </Box>
      </Box>
    );
  }
}
