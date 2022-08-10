import PropTypes from 'prop-types';
import { ImageGallery } from './ImageGallery.styled';

const ImageGallery = ({ id, name, number, onDeleteContact }) => {
  return (
<ImageGallery>
  
</ImageGallery>

  );
};

ContactsItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ImageGallery;
