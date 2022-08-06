import  Box  from 'components/Box';
import Logo  from 'components/Logo';

const AppBar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      as="header"
      px={4}
      py={3}
      mb={3}
      bg="primary"
    >
      <Logo />
      <div>UserMenu</div>
    </Box>
  );
};

export default ButAppBarton;