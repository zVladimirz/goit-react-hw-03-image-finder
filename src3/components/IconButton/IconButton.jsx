import React from 'react';
import PropTypes from 'prop-types';
import { IconButtonStyled } from './IconButton.styled'; 


const IconButton = ({ children, onClick, ...allyProps }) => (
  <IconButtonStyled type="button" onClick={onClick} {...allyProps}>
    {children}
  </IconButtonStyled>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
