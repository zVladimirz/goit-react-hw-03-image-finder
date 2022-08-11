import PropTypes from 'prop-types';
import {
  ImageGalleryItemStyled,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ key, imageUrl, tags, modalImage, modalToggle }) => {
  return (
    <>
      <ImageGalleryItemStyled onClick={() => modalToggle(modalImage, tags)}>
        <ImageGalleryItemImage
          src={imageUrl}
          alt={tags}
        ></ImageGalleryItemImage>
      </ImageGalleryItemStyled>
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
