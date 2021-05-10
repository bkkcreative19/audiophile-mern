import React from "react";
import Image1 from "../../../assets/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import Image2 from "../../../assets/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import Image3 from "../../../assets/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";

const Gallery = () => {
  return (
    <section className="gallery container">
      <div className="left">
        <img src={Image1} alt="image1" />
        <img src={Image2} alt="image2" />
      </div>
      <div className="right">
        <img src={Image3} alt="image3" />
      </div>
    </section>
  );
};

export default Gallery;
