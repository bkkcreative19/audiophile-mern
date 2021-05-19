import React from "react";
import PropTypes from 'prop-types'

const Gallery = ({product}) => {
  // const {gallery} = product 
  // console.log(product)
  return (
    <section className="gallery container">
      {product.gallery && <> <div className="left">
        <img src={product.gallery.first} alt="image1" />
        <img src={product.gallery.second} alt="image2" />
      </div>
      <div className="right">
        <img src={product.gallery.third} alt="image3" />
      </div></>}
     
    </section>
  );
};

Gallery.propTypes = {
  product: PropTypes.object.isRequired
}

export default Gallery;
