import React from "react";

const Image = ({ src, alt }) => {
  return (
    <article className='gallery-img-container'>
      <img src={src} alt={alt} className='gallery-img' />
    </article>
  );
};

export default Image;
