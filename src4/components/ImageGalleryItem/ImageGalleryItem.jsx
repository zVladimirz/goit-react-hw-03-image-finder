import PropTypes from 'prop-types';
import { ContactsViewListText } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
<li class="gallery-item">
  <img src="" alt="" />
</li>
<ImageGalleryItem>
  <ImageGalleryItemImage>
    
  </ImageGalleryItemImage>
</ImageGalleryItem>

      <ContactsViewListText>{name + ': ' + number}</ContactsViewListText>
      <button onClick={() => onDeleteContact(id)}>Удалить</button>
    </>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
